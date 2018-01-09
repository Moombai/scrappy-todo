import React from 'react';
import { Input } from './Input';
import { ListItems } from './ListItems';
import Filter from './Filter';

export class Todo extends React.Component {
	render() {
		/** We pass the task number to ListItems via the index prop as values passed to "keys"
			are not available via props.  
		**/
		const filterState = this.props.filterState;
		const renderedTasks = "";
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
				.map(key => {
					if(this.props.task[key].status === "complete")

					return <ListItems 
							key={key} 
							index={key}
							status={this.props.task[key].status}
							toggleStatus={this.props.toggleStatus}
							details={this.props.task[key].action}
							deleteTask={this.props.deleteTask}
					/>});

		if (filterState === true) {
			return (
				<div className="list-container">
					<Input addTask={this.props.addTask} />
					<Filter 
						toggleFilter={this.props.toggleFilter} 
					/>
					<ul>
						{
							allTasks
						}
					</ul>
				</div>
			);
		} 

		return (
			<div className="list-container">
				<Input addTask={this.props.addTask} />
				<Filter 
					toggleFilter={this.props.toggleFilter} 
				/>
				<ul>
					{
						completeOnly
					}
				</ul>
			</div>
		);	
	}
};