import React from 'react';
// import ReactDOM, { render } from 'react-dom';
import { Redirect } from "react-router-dom";

// import Button from '@mui/material/Button';

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      password: ''
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUserChange(e){
    this.setState({ user: e.target.value})
  }
  onPasswordChange(e){
    this.setState({ password: e.target.value})
  }


  // handleChange(e){
  //   console.log("handleChange");
  //   this.use({value: e.target.user});
  //   this.password({value: e.target.password});
  // }

  handleSubmit(e){    
    e.preventDefault();
    console.log(this.state.user);
    console.log(this.state.password);
   
    // return this.props.history.push('/user');
  }
  render() {
    // console.log(this.props); 
    const { user, password } = this.state;
    return (      
      <div>
        <h1>Login</h1>        
         <form onSubmit={this.handleSubmit.bind(this)}>
          <div>            
            <h2>
              User:
            </h2>
              <input                  
                  id="user"
                  name="user"
                  value={user}
                  onChange={this.onUserChange}
                />
            <h2>
              Password:
            </h2>
               <input                  
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.onPasswordChange}
                />
          </div>
          <div>
          <button type="submit" >LOGAR</button>
          {/* <button type="submit" onClick={() => this.handleSubmit} >LOGAR</button> */}
          {/* <Button type="submit" onClick={() => this.handleSubmit} variant="contained" color="primary" >
            Entra
          </Button> */}
          </div>       
        </form>        
      </div>
    );
  }
};
