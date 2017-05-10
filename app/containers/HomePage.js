import React, { Component } from 'react';
import Home from '../components/Home/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { logoutUser } from '../actions/index';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated){
      this.props.router.replace('/login');
    }
  }

  clickHandler() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Home />
        <button onClick={this.clickHandler}>Log me out!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logoutUser: logoutUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
