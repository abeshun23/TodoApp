import React, {Component} from 'react';
import EditTodo from './EditTodo';
import Todo from './Todo';

class List extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[],
      nextId: 0,
      filter: 'all',}
  };
  
  handleChangeTodoAttribute = (id, key, value)=>{
    const newTodos = this.state.todos.map(todo=>{
      if(todo.id === id){
        return{
          ...todo,[key]: value
        };
      }
      return todo;
    });
    this.setState({todos: newTodos});
  }

  handleUpdateTodoTitle=(id,title)=>{
    const newTodo = this.state.todos.map(todo =>{
      if (todo.id === id){
        return{
          ...todo,
          title,
          editing:false
        };
      }
      return todo;
    });
    this.setState({todos: newTodo});
  };
  
  handleClickDelete=(id)=>{
    const newTodos=this.state.todos.filter(todo=>todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };
  
  render(){
    const {todos, filter} = this.props;
    const filteredTodos = todos.filter(({completed})=>{
      switch (filter) {
        case 'all':
          return true;
        case 'uncompleted':
          return !completed;
        case 'completed':
          return completed;
        default:
          return true;
      }
    });
    return(
      <ul className='todos'>
        {filteredTodos.map(({id,title,completed, editing})=>(
          <li key={id}>
            {editing ?(
            <EditTodo
              id={id}
              title={title}
              onCancel={this.handleChangeTodoAttribute}
              onUpdate={this.handleUpdateTodoTitle}
            />
            ) : (
            <Todo 
              id={id} 
              title={title} 
              completed={completed} 
              onChange={this.handleChangeTodoAttribute}
              onDelete={this.handleClickDelete}
            />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;