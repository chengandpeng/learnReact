import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
    	<div>
      	<div className="page-header"><h1>Redux Simple Blog</h1></div>
      	{this.props.children}
			</div>
    );
  }
}
