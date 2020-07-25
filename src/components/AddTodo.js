import React, { Component }  from 'react';
import './addTodo.css';

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state={title: '',todoDeadline:''}
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange=(property,event)=>{
    // const title=event.currentTarget.value;
    // this.setState({title: title});
    this.setState({[property]:event.target.value});
  };
  
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addTodo(this.state.title,this.state.todoDeadline);
    this.setState({title: '',todoDeadline:''});
  };

  render(){
    return(
      <div className='left-part'>
        <h1>Add Todo</h1>
        <div className='addtodo'> 
          <form onSubmit={this.handleSubmit}>
            <div className='todo-input'>
              <label for='todoInput'>Your Todo: </label>
              <input type='text' placeholder='Please write' value={this.state.title} onChange={this.handleChange.bind(this,'title')} id='todoInput'/>
            </div>
            <div className='todo-input'>
              <label for='todoDeadline'>Deadline: </label>
              <input type='text' placeholder='20xx/xx/xx' value={this.state.todoDeadline} onChange={this.handleChange.bind(this,'todoDeadline')} id='todoDeadline'/>
            </div>
              <input type='submit' value='Add Todo' className='btn_addtodo'/>
          </form>
        </div>
      </div>
    );
  }
}
export default AddTodo;