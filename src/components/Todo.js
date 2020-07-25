import React, { Component }  from 'react';
import './todo.css';


class Todo extends Component{
  handlechangeCompleted=()=>{
    const {onChange, id, completed}=this.props;
    onChange(id, 'completed', !completed);
  };

  handleClickEdit=()=>{
    const {onChange, id, editing}= this.props;
    onChange(id, 'editing', !editing);
  };

  handleClickDelete=()=>{
    const {onDelete, id} = this.props;
    onDelete(id);
  };

  render(){
    const {title, todoDeadline, completed} = this.props;
    return(
      <div  className='todo-item'>
        <label>
          <input type='checkbox' checked={completed} onChange={this.handlechangeCompleted} className='checkbox'/>
          <div className='todo'>
            <div className='title'>Title: {title}</div>
            <div className='deadline'>Deadline: {todoDeadline}</div>
          </div>
          <div className='todo-btns'>
            <button onClick={this.handleClickEdit}>Edit</button>
            <button onClick={this.handleClickDelete}>Delete</button>
          </div>
        </label>
      </div>
    );
  }
}

export default Todo;