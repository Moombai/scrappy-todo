import React from 'react';
import { Input } from './Input';
import { ListItems } from './ListItems';

export class Todo extends React.Component {
	render() {
		return (
			<div>
				<Input />
				<ul>
					<ListItems />
					<ListItems />
					<ListItems />
					<ListItems />
				</ul>
			</div>
		);
	}
};