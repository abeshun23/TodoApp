import React,{Component} from "react";

class EditTodo extends Component{
  constructor(props){
    super(props);
    this.state={
      title: props.title
    };
  }

  handleChange=event=>{
    this.setState({title:event.currentTarget.value});
  };
  handleClickCancel=()=>{
    const {onCancel, id} = this.props;
    onCancel(id, 'editing', false);
  };

  handleUpdate=()=>{
    const {onUpdate, id}=this.props;
    if(!this.props.title) return;
    onUpdate(id, this.state.title);
  };

  render(){
    return(
      <div>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClickCancel}>Cancel</button>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }

}

export default EditTodo;