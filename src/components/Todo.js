import React from 'react';
import { Input } from './Input';
import { ListItems } from './ListItems';

export class Todo extends React.Component {
	render() {
		/** We pass the task number to ListItems via the index prop as values passed to "keys"
			are not available via props.  
		**/
		return (
			<div className="list-container">
				<Input addTask={this.props.addTask} />
				<ul>
					{
						Object
							.keys(this.props.task)
							.map(key => <ListItems 
								key={key} 
								index={key}
								status={this.props.task[key].status}
								toggleStatus={this.props.toggleStatus}
								details={this.props.task[key].action}
								deleteTask={this.props.deleteTask}  
								/>)
					}
				</ul>
			</div>
		);
	}
};