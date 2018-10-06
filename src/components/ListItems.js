import React from 'react';
import { Icon } from './Icon';
import { Button } from 'react-bootstrap';

class ListItems extends React.Component {
	render() {
		const taskNumber = this.props.index;
		const taskStatus = this.props.status;
		const deleteButton = <Button bsStyle="danger" bsSize="small" onClick={ () => this.props.deleteTodo(taskNumber) }>Delete</Button>;
		const toggleStatus = 
			<button onClick={ () => this.props.toggleTodo(taskNumber) }
				className={taskStatus === "complete" ? "complete-task" : "incomplete-task"}
			>
				<Icon status={taskStatus} />
			</button>;

		return (
			<li className="item-description">
				<div className="item-details">{this.props.details}</div> <span className="item-buttons">{deleteButton} {toggleStatus}</span>
			</li>
		);
	}
}

export default ListItems;