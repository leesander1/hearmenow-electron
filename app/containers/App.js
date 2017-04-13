// @flow
import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
      <NavBar />
        {this.props.children}
      </div>
    );
  }
}
