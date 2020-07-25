import React,{Component} from "react";

class EditTodo extends Component{
  constructor(props){
    super(props);
    this.state={
      title: props.title,
      todoDeadline: props.todoDeadline
    };
  }

  handleChange=(property,event)=>{
    this.setState({[property]:event.target.value});
  };
  handleClickCancel=()=>{
    const {onCancel, id} = this.props;
    onCancel(id, 'editing', false);
  };

  handleUpdate=()=>{
    const {onUpdate, id}=this.props;
    if(!this.props.title || !this.props.todoDeadline) return;
    onUpdate(id, this.state.title, this.state.todoDeadline);
  };

  render(){
    return(
      <div>
        <labe for='todoInput'>Your Todo
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange.bind(this,'title')}
            id='todoInput'
          />
        </labe>
        <labe for='todoDeadline'>Deadline
          <input
            type='text'
            value={this.state.todoDeadline}
            onChange={this.handleChange.bind(this,'todoDeadline')}
            id='todoDeadline'
          />
        </labe>
        <button onClick={this.handleClickCancel}>Cancel</button>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }

}

export default EditTodo;