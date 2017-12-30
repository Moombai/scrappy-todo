import React from 'react';

export class Input extends React.Component {
	handleUpdate(event){
		// Prevent the form submission from re-rendering the page
		event.preventDefault();
		// grab task from the form
		const newTask = this.listItem.value;
		this.props.addTask(newTask);
		// reset the form after we are done
		this.taskForm.reset();
	}
	render() {
		// The return function will pass an event to handleUpdate function
		/** We also use refs to capture values from form which we will then use in the
			handleUpdate function
		**/
		return ( 
			<form ref={(input) => this.taskForm = input} onSubmit={(e) => this.handleUpdate(e)}>
			Thing to do: <input ref={(input) => this.listItem = input} type="text" name="thingtodo" placeholder="Add list items" />
			<button type="submit">Add task</button>
			</form>
		)
	}
}

