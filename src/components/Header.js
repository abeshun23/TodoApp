import React, { Component }  from 'react';
import './header.css';

function LoginButton(props){
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function UserGreeting(props){
  return <h2>Welcome back!</h2>
}

function GuestGreeting(props){
  return <h2>Please sign up.</h2>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }else{
    return<GuestGreeting/>;
  }
}

class Header extends Component{
  constructor(props){
    super(props);
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
    this.state={isLoggedIn: false, isModalOpen: false};
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true,isModalOpen: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  handleClickModalClose(){
    this.setState({isModalOpen:false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button=<LogoutButton onClick={this.handleLogoutClick}/>
    }else{
      button=<LoginButton onClick={this.handleLoginClick}/>
    }

    let modal;
    if(this.state.isModalOpen){
      modal=(
        <div className='loginModal'>
          <label className='address-input'>Address:  
            <input type='address' placeholder='aaaa@bbb' className='input'/>
          </label>
          <label className='password-input'>Password:  
            <input type='password' placeholder='Please Your Password' className='input'/>
          </label>
          <button onClick={()=>{this.handleClickModalClose()}} className='login-btn'>Login</button>
        </div>
      )
    }

    return(
      <div className='header'>
        <div className='header-tittle'>
          <h1 className='app_tittle'>TodoApp</h1>
        </div>
        <div className='header-login'>
          <div className='greeding'>
            <Greeting isLoggedIn={isLoggedIn} />
          </div>
          <div className='log-button'> 
            {button}
          </div>
          {modal}
        </div>
      </div>
    );
  }
}
export default Header;