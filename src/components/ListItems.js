import React from 'react';

export class ListItems extends React.Component {
	render() {
		return <li className="item-description">{this.props.details}</li>;
	}
}