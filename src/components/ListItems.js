import React from 'react';

export class ListItems extends React.Component {
	render() {
		const taskNumber = this.props.index;
		const taskStatus = this.props.status;
		const deleteButton = <button onClick={ (task) => this.props.deleteTask(taskNumber) }>Delete</button>;
		const toggleStatus = <button onClick={ (status) => this.props.toggleStatus(taskNumber) }>✅</button>;

		return (
			<li className="item-description">
				{this.props.details} {deleteButton} {toggleStatus} {taskStatus}
			</li>
		);
	}
}