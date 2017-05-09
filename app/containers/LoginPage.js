// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';
import { TextField, RaisedButton } from 'material-ui';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated){
      this.props.router.replace('/dashboard/home');
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]:target.value
    });
    console.log(name + " : " + target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    const url = 'https://serene-island-28717.herokuapp.com/login';

    let data = {
      email: this.state.email,
      password: this.state.password
    }
    let myHeaders = new Headers({
      "Content-Type" : "application/json"
    })

    let fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders
    }
    console.log(data);

    fetch(url, fetchData)
    .then(response => {
      if (response.status == 200) {
        // action creator
        console.log("success");
        console.log('response', response);
      }
      else {
        // action creator
        console.log('response', response);
      }
    });

  }

  render() {
    return (
      <div>
      <p>This be the login page</p>
      <form id="login" onSubmit={this.handleSubmit} >
       <TextField  type="text" floatingLabelText="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
       <TextField floatingLabelText="Password" id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
       <RaisedButton label="Login" primary={true} type="submit" />
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

// anything returned from this function will end up as props for this container
function mapDispatchToProps(dispatch) {
  // the first param is an obj where the key will end up being a prop for this container
  // the second param is the action that will be created
  return bindActionCreators({loginUser: loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
