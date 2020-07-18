import React,{Component} from 'react';

class Filter extends Component{
  
  handleChange=event=>{
    this.props.onChange(event.currentTarget.value);
  };

  render(){
    const {filter}=this.props;
    return(
      <select value={filter} onChange={this.handleChange}>
        <option value='all'>全て</option>
        <option value='uncompleted'>未完了</option>
        <option value='completed'>完了済み</option>
      </select>
    );
  }
}

export default Filter;