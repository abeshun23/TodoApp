import React, { Component }  from 'react';


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
    const {title, completed} = this.props;
    return(
      <div>
        <label>
          <input type='checkbox' checked={completed} onChange={this.handlechangeCompleted}/>
          {title}
          <button onClick={this.handleClickEdit}>Edit</button>
          <button onClick={this.handleClickDelete}>Delete</button>
        </label>
      </div>
    );
  }
}

export default Todo;