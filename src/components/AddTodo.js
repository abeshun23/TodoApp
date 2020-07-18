import React, { Component }  from 'react';
import './addTodo.css';

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state={title: ''}
  }

  handleChange=event=>{
    const title=event.currentTarget.value;
    this.setState({title: title});
  };
  
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.props.addTodo(this.state.date);
    this.setState({title: ''});
  };

  render(){
    return(
      <div className='left-part'>
        <div className='addtodo'> 
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Your todo' value={this.state.title} onChange={this.handleChange}/>
            <input type='submit' value='Add Todo'/>
          </form>
        </div>
      </div>
    );
  }
}
export default AddTodo;