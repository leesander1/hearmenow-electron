// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';
import { TextField, FlatButton, Card } from 'material-ui';
import styles from '../components/Login/Login.css';
import { Link } from 'react-router';


class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '',firstName: '', lastName:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.props.router.replace('/dashboard/home');
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = 'https://serene-island-28717.herokuapp.com/signup';

    let data = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    let myHeaders = new Headers({
      "Content-Type" : "application/json"
    })

    let fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders
    }

    fetch(url, fetchData)
    .then(response => {
      // action creator
      if (response.status === 201) {
        response.json().then(data => {
          // console.log('Signup Response: ', data);
          this.props.loginUser(data);
        });
        // console.log('response', response);
      }
      else {
        // action creator
        // TODO: Handle errors and notify user
        console.log('response', response);
      }
    });
  }

  render() {
    return (
      <div>
        <form id="signup" onSubmit={this.handleSubmit}>

          <div className={`${styles.logo}`}>
            <img src="../resources/icon.png" alt="HearMeNow Logo" />
          </div>

          <h1>Sign Up</h1>

          <TextField
            type="text"
            floatingLabelText="First Name"
            id="firstName"
            name="firstName"
            value={this.state.first}
            onChange={this.handleChange.bind(this)} />

          <TextField
            type="text"
            floatingLabelText="Last Name"
            id="lastName"
            name="lastName"
            value={this.state.last}
            onChange={this.handleChange.bind(this)} />

          <TextField
            type="email"
            floatingLabelText="Email"
            id="email"
            name="email"
            errorText="Enter a valid email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)} />

          <TextField
            floatingLabelText="Password"
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)} />

          <div className={`${styles.signupContainer}`}>
            <FlatButton
              label="Create Account"
              primary={true}
              type="submit"
              className={`${styles.signup}`} />
          </div>

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
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
