import React, { Component }  from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import Header from './components/Header';
import CheckAll from './components/CheckAll';
import Filter from "./components/Filter.js";
import EditTodo from "./components/EditTodo.js";
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[],
      nextId: 0,
      filter: 'all',
    }
  }

  addTodo=(title,todoDeadline)=>{
    const newTodo ={
      id:this.state.nextId + 1,
      title: title,
      todoDeadline: todoDeadline,
      completed: false,
      editing: false,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({
      todos:newTodos,
      nextId:this.state.nextId +1
    })
  };

  handleChangeCompleted =(id, completed)=>{
    const newTodos = this.state.todos.map(todo=>{
      if(todo.id === id){
        return{
          ...todo,
          completed
        }
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  handleChangeAllCompleted = completed =>{
    const newTodos = this.state.todos.map(todo =>({
      ...todo,
      completed
    }));
    this.setState({todos: newTodos});
  }

  handleClickDelete=(id)=>{
    const newTodos=this.state.todos.filter(todo=>todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  handleClickDeleteCompleted=()=>{
    this.setState({
      todos:this.state.todos.filter(({completed})=>!completed)
    });
  }

  handleChangeFilter = filter =>{
    this.setState({filter});
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

  handleUpdateTodoTitle=(id,title,todoDeadline)=>{
    const newTodo = this.state.todos.map(todo =>{
      if (todo.id === id){
        return{
          ...todo,
          title,
          todoDeadline,
          editing:false,
        };
      }
      return todo;
    });
    this.setState({todos: newTodo});
  };

  render(){
    const {todos, filter} = this.state;
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
      <div className='app-all' >
        <Header className='header'/>
        <div className='todos'>
          <div className='left'>
            <AddTodo addTodo={this.addTodo} className='add-todo'/>
          </div>
          <div className='right'>
            <div className='right-uppper'>
              <h1>List</h1>
              <CheckAll
                allCompleted={todos.length > 0 && todos.every(({completed}) => completed)} 
                onChange={this.handleChangeAllCompleted}
              />
              <button onClick={this.handleClickDeleteCompleted} className='all-delete-btn'>Delete All Completed Todos</button>
              <br/>
              <Filter filter={filter} onChange={this.handleChangeFilter}/>
            </div>
            <div className='right-under'>
              <ul >
                {filteredTodos.map(({id,title,todoDeadline,completed, editing})=>(
                  <li key={id}>
                    {editing ?(
                    <EditTodo
                      id={id}
                      title={title}
                      todoDeadline={todoDeadline}
                      onCancel={this.handleChangeTodoAttribute}
                      onUpdate={this.handleUpdateTodoTitle}
                    />
                    ):(
                    <Todo 
                      id={id} 
                      title={title} 
                      todoDeadline={todoDeadline}
                      completed={completed} 
                      onChange={this.handleChangeTodoAttribute}
                      onDelete={this.handleClickDelete}
                    />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;