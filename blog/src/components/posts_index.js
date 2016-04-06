import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends React.Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <Link to={"/blog/posts/" + post.id}>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
      	<div className="text-xs-right">
      		<Link to="/blog/posts/new" className="btn btn-primary">
      			新增文章
      		</Link>
      	</div>
      	<h3>文章列表</h3>
        <br />
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);

// export default connect(null, { fetchPosts })(PostsIndex);