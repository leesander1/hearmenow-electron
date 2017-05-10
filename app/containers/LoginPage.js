import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import PropTypes from 'prop-types';
import { TextField, FlatButton } from 'material-ui';
import { loginUser } from '../actions/index';
import styles from '../components/Login/Login.css';
import Login from '../components/Login/Login';


class LoginPage extends Component {

  static propTypes = {
    loginUser: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

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

    const url = 'https://serene-island-28717.herokuapp.com/login';

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders
    };

    fetch(url, fetchData)
    .then(response => {
      if (response.status === 200) {
        // action creator

        response.json().then(data => {
          // console.log(data);
          this.props.loginUser(data);
        }).catch(error => {
          console.log('Reponse error: ', error);
        });
        // console.log('response', response);
      } else {
        // action creator
        // TODO: Handle errors and notify user
        console.log('response', response);
      }
    }).catch(error => {
      console.log('Fetch error: ', error);
    });
  }

  render() {
    return (
      <div>
        <form id="login" onSubmit={this.handleSubmit}>

          <div className={`${styles.logo}`}>
            <img src="../resources/icon.png" alt="HearMeNow Logo" />
          </div>

          <h1>HearMeNow</h1>
          <h2>User Login</h2>

          <TextField
            type="email"
            floatingLabelText="Email"
            id="email"
            name="email"
            className={styles.textFieldWidth}
            value={this.state.email}
            onChange={this.handleChange.bind(this)} />

          <TextField
            floatingLabelText="Password"
            id="password"
            name="password"
            className={styles.textFieldWidth}
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)} />

          <div
            className={styles.loginSignupContainer}>
            <FlatButton
              label="Login"
              primary
              className={styles.login}
              type="submit" />

            <Link to="/signup">
              <FlatButton
                label="Sign Up"
                className={styles.signup}
                primary />
            </Link>
          </div>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

// anything returned from this function will end up as props for this container
function mapDispatchToProps(dispatch) {
  // the first param is an obj where the key will end up being a prop for this container
  // the second param is the action that will be created
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
