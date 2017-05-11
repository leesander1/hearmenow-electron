import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { logoutUser } from '../actions/index';
import Home from '../components/Home/Home';
import styles from '../components/Home/Home.css';

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
      <div className={`${styles.buttonContainer}`}>
        <Home />
        <br />
        <FlatButton
          label="Log me out!"
          primary
          onClick={this.clickHandler}
          className={`${styles.button}`} />
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
