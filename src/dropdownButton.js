import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Button extends React.Component {
	handleSelect(event, eventKey) {
		switch(eventKey) {
			case "1":
				window.open('/weather','_blank');
				break;
			case "2":
				window.open('/blog','_blank');
				break;
		}
	}

  render() {
    return (
    	<DropdownButton bsStyle="success" title="React Works" key='1' id="worksButton" onSelect={this.handleSelect}>
	      <MenuItem eventKey="1">Weather</MenuItem>
	      <MenuItem eventKey="2">Simple Blog</MenuItem>
    	</DropdownButton>
    );
  }
}
