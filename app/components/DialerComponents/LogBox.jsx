import React from 'react';

class LogBox extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    smallText: React.PropTypes.string,
  }

  render() {
    return (
      <div>
        <div className="log">{this.props.text}</div>
        <p>{this.props.smallText}</p>
      </div>
    );
  }
}

export default LogBox;
