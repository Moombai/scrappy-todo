import React from 'react';
import { Input } from './Input';
import { ListItems } from './ListItems';

export class Todo extends React.Component {
	render() {
		return (
			<div className="list-container">
				<Input addTask={this.props.addTask} />
				<ul>
					{
						Object
							.keys(this.props.task)
							.map(key => <ListItems key={key} details={this.props.task[key]} />)
					}
				</ul>
			</div>
		);
	}
};