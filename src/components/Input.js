import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		// grab task from the form
		const newTask = {action: this.state.value, status: "incomplete"}
		this.props.addTask(newTask);
		// reset the form after we are done
		this.setState({value: '' })
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return ( 
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<FormGroup>
					{/* FormControl will render an input field */}
					<FormControl
						type="text"
						value={this.state.value}
						placeholder="Add thing todo"
						onChange={this.handleChange}
					/>
					<Button bsStyle="primary" bsSize="small" type="submit">Add task</Button>
				</FormGroup>
			</form>
		)
	}
}

