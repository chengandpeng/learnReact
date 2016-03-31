import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import Marked from 'marked';

function mapStateToProps(state) {
  return {
  		post: state.posts.post
  };
}

export class PostsShow extends React.Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

  static contextTypes = {
    router: React.PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(()=> {
        this.context.router.push('/');
      });
  }

  createMarkup() {
    return {
      __html: Marked(this.props.post.content, {sanitize:true})
    }
  }

  render() {
    const { post } = this.props;
   
    if (!this.props.post) {
      return <div>loading...</div>
    }
    if (this.props.post.id != this.props.params.id) {
      return <div>loading...</div>
    }


    return (
      <div>
        <Link to="/" className="btn btn-primary">返回首页</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          删除文章
        </button>
        <br/><br/>
        <div className="card">
          <div className="card-header">
            <h3 className="text-xs-center">{post.title}</h3>
            <strong>分类:{post.categories}</strong>
          </div>
          <div className="card-block">
             <p className="card-text" dangerouslySetInnerHTML={this.createMarkup()} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);
