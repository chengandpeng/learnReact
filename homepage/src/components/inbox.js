import React from 'react';
import DropdownButton from './dropdownButton';
import Tag from './tag';

export default class Inbox extends React.Component {
	componentWillMount() {
		$(function() {
			 $("#type").typed({
        strings: ['*･゜ﾟ･*:.｡..｡.:*･\'(*ﾟ▽ﾟ*)\'･*:.｡. .｡.:*･゜ﾟ･*',
        					'repoleved.', '(=￣ ρ￣=) ..zzZZ', 
        					'(=´∀｀)人(´∀｀=)',　'Developer tsiratiug.', 'Developer Guitarist.'],
        typeSpeed: 0
      });
		});
	}

  render() {
    return (
      <div className="jumbotron">
			  <h1 className="display-3">Peng Cheng</h1>
			  <p className="lead sub-title"><span id="type"></span></p>
			  <hr className="m-y-2" />
			  <p className="desc">A simple personal homepage.</p>
			  <Tag />
			  <DropdownButton />
			</div>
    );
  }
}
