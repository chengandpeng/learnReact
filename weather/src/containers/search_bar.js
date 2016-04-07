import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		//this.onInputChange = this.onInputChange.bind(this);
		//this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({
			term : '' 
		});
	}

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
      	<input placeholder="获取城市未来5天天气预报趋势（输入城市拼音）"
      		className="form-control"
      		value={this.state.term}
	      	onChange={this.onInputChange.bind(this)}/>
      	<span className="input-group-btn">
      		<button type="submit" className="btn btn-secondary">搜索</button>
      	</span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);