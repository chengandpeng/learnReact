import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const list = this.props.comments.map(comment => <li key={comment}>{comment}</li> );
    return (
      <ul className="comment-list">
      	{list}
      </ul>
    );
  }
}

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);