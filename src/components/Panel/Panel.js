import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    const border  = this.props.border;
    return <div className={!!border ? "card" : '' }>{this.props.children}</div>;
  }
}

export default Panel;
