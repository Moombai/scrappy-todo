import React from 'react';

export class ListItems extends React.Component {
	render() {
		const taskNumber = this.props.index;
		const removeButton = <button onClick={ (task) => this.props.deleteTask(taskNumber) }>&times;</button>;
		return (
			<li className="item-description">
				{this.props.details} {removeButton}
			</li>
		);
	}
}