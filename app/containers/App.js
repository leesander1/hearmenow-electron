import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Layout, Header, HeaderRow, Content } from 'react-mdl'

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div className="">
        <NavBar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
