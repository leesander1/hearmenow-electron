import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Layout, Header, HeaderRow, Content } from 'react-mdl'

injectTapEventPlugin();

export default class App extends Component {
  props: {
    children: HTMLElement
  };
  render() {
    return (
      <div className="">
        <MuiThemeProvider>
          <div>
            <NavBar />
            <div className="content">
              {this.props.children}
            </div>
            <Footer router={this.router}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

var connection = window.navigator.onLine
