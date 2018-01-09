import React from 'react';

class Filter extends React.Component {
	render() {
		return (
			<div>
				<span>
					Show only completed tasks:<input 
						onClick={() => this.props.toggleFilter()}
						id="checkBox" 
						type="checkbox" />
				</span>
			</div>
		);
	}
}

export default Filter;

// (task) => this.props.deleteTask(taskNumber)