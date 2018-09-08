import React from 'react';

class Filter extends React.Component {
	render() {
		return (
			<div className="list-filter">
				<span>
					Show completed:
					<input
						onClick={() => this.props.toggleFilter()}
						id="checkBox"
						type="checkbox"
						checked={this.props.filtered === true}
						readOnly
					/>
				</span>
			</div>
		);
	}
}

export default Filter;

// (task) => this.props.deleteTask(taskNumber)