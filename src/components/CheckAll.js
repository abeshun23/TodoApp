import React, { Component } from 'react';

class CheckAll extends Component{
  handleChange=()=>{
    const {onChange, allCompleted}=this.props;
    onChange(!allCompleted)
  }
  
  render(){
    const {allCompleted}=this.props;
    return(
      <label>
        <input type='checkbox' checked={allCompleted} onChange={this.handleChange} />
        全て{allCompleted? '未完了':'完了'}にする
      </label>
    );
  }
}

export default CheckAll;