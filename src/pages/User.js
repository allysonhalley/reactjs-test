import React from 'react';
import Button from '@mui/material/Button';

export default class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      password: props.password
    };    
  }
  render() {
      return (      
      <div>
        <h1>USER</h1>
        <form className="user">
          <h2>
            User
          <input readOnly={true} value={ this.state.user } />
          </h2>
          <h2>
            Password
          <input readOnly={true} value={ this.state.password } />          
          </h2>
          <div>
            <Button href="/"  variant="contained" color="primary">HOME</Button>
          </div>       
        </form>        
      </div>
    );
  }
}
