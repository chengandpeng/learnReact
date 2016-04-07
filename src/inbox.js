import React from 'react';

export default class Inbox extends React.Component {

  render() {
    return (
      <div className="jumbotron tk-fira-sans">
			  <h1 className="display-3">Peng Cheng</h1>
			  <p className="lead sub-title">Developer, Guitarist</p>
			  <hr className="m-y-2" />
			  <p className="desc">A simple personal homepage.</p>
			  <p className="lead">
			    <a href="https://twitter.com/chengandpeng" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
			    <a href="https://github.com/chengandpeng" target="_blank"><i className="fa fa-github fa-2x"></i></a>
			    <a href="https://www.youtube.com/user/chengandpeng" target="_blank"><i className="fa fa-youtube fa-2x"></i></a>
			    <a href="http://chengandpeng.github.io/" target="_blank"><i className="fa fa-bold fa-2x"></i></a>
			  </p>
			  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</div>
    );
  }
}
