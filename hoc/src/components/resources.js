import React from 'react';

export default class Resources extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>super recipe
      	<ul>
      		<li>fwe</li>
      		<li>aaa</li>
      		<li>fae</li>
      		<li>fea</li>
      		<li>jiowfiwjoef</li>
      	</ul>
      </div>
    );
  }
}
