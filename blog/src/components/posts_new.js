import React from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import Marked from 'marked';

class PostsNew extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

  constructor(props) {
    super(props);
    
    this.state = { 
      markedContent: '',
      checkState: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBox = this.handleChangeBox.bind(this);
  }

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				this.context.router.push('/');
			});
	}

  handleChange() {
    this.setState({
      markedContent : this.refs.contentTextarea.value
    });
  }

  createMarkup() {
    return {
      __html: Marked(this.state.markedContent, {sanitize:true})
    }
  }

  handleChangeBox(event) {
    this.setState({
      checkState : event.target.checked 
    });
  }

  render() {
  	const { fields: { title, categories, content }, handleSubmit } = this.props; // handleSubmit = this.props.handleSubmit
    const toggleCheck = this.state.checkState ? '' : 'hidden';
    const today = new Date().toLocaleDateString();

    return (
    	<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
    		<h3>新增一篇文章</h3>
        <div className="text-xs-right">
          <button type="submit" className="btn btn-primary">提交</button>
          <Link to="/" className="btn btn-danger">取消</Link>
    		</div>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
    			<label>标题</label>
    			<input type="text" className="form-control" {...title} />
    			<div className="text-help">
    				{title.touched ? title.error : ''}
    			</div>
  			</div>
  			<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
    			<label>分类</label>
    			<input type="text" className="form-control" {...categories} />
  				<div className="text-help">
    				{categories.touched ? categories.error : ''}
    			</div>
  			</div>
  			<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
    			<label>内容(支持MarkDown)</label>
    			<textarea className="form-control" rows='20' ref="contentTextarea" onKeyDown={this.handleChange} {...content}/>
    			<div className="text-help">
    				{content.touched ? content.error : ''}
    			</div>
  			</div>
        <div>
          <label><input type="checkbox" checked={this.state.checkState} onChange={this.handleChangeBox}/> 预览Makrdown</label>
          <div className={ toggleCheck } dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
    	</form>
    );
  }
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = '请输入标题';
	}
	if (!values.categories) {
		errors.categories = '请输入分类';
	}
	if (!values.content) {
		errors.content = '请输入内容';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content' ],
	validate
}, null, { createPost })(PostsNew);