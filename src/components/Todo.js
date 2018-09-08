import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Input } from './Input';
import { ListItems } from './ListItems';
import Filter from './Filter';

export class Todo extends React.Component {
	render() {
		/** We pass the task number to ListItems via the index prop as values passed to "keys"
			are not available via props.  
		**/
		const filterState = this.props.filterState;
		// TODO: Render all the task or tasks completed depending on the filter state
		const allTasks = Object
			.keys(this.props.task)
			.map(key => <ListItems 
				key={key} 
				index={key}
				status={this.props.task[key].status}
				toggleStatus={this.props.toggleStatus}
				details={this.props.task[key].action}
				deleteTask={this.props.deleteTask}  
				/>);

		const completeOnly = Object
				.keys(this.props.task)
			  .filter(key => this.props.task[key].status === "complete" )
				.map(key => (
					<ListItems
						key={key}
						index={key}
						status={this.props.task[key].status}
						toggleStatus={this.props.toggleStatus}
						details={this.props.task[key].action}
						deleteTask={this.props.deleteTask}
					/>
				));

		return (
			<Row>
				<Col md={6} mdOffset={3}>
					<div className="list-container">
							<Row>
								<Col className="list-header" sm={7}>
									<Input addTask={this.props.addTask} />
								</Col>
								<Col sm={5}>
									<Filter
										toggleFilter={this.props.toggleFilter}
										filtered={this.props.filterState}
									/>
								</Col>
							</Row>
							<div className="todo-wrapper">
								<ul>
									{
										filterState === false ? allTasks : completeOnly
									}
								</ul>
							</div>
					</div>
				</Col>
			</Row>
		);	
	}
};