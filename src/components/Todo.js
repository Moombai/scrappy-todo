import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Input } from './Input';
import ListItems from './ListItems';
import Filter from './Filter';

class Todo extends React.Component {
	render() {
		/** We pass the task number to ListItems via the index prop as values passed to "keys"
			are not available via props.  
		**/
		const filterState = this.props.filtered;
		// TODO: Render all the task or tasks completed depending on the filter state
		const allTasks = Object
			.keys(this.props.todo)
			.map(key => <ListItems 
				key={key} 
				index={key}
				status={this.props.todo[key].status}
				toggleTodo={this.props.toggleTodo}
				details={this.props.todo[key].action}
				deleteTodo={this.props.deleteTodo}
				/>);

		const completeOnly = Object
				.keys(this.props.todo)
			  .filter(key => this.props.todo[key].status === "complete" )
				.map(key => (
					<ListItems
						key={key}
						index={key}
						status={this.props.todo[key].status}
						toggleTodo={this.props.toggleTodo}
						details={this.props.todo[key].action}
						deleteTodo={this.props.deleteTodo}
					/>
				));

		return (
			<Row>
				<Col md={6} mdOffset={3}>
					<div className="list-container">
							<Row>
								<Col className="list-header" sm={7}>
									<Input addTodo={this.props.addTodo} />
								</Col>
								<Col sm={5}>
									<Filter
										toggleFilter={this.props.toggleFilter}
										filtered={this.props.filtered}
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

const mapStateToProps = state => {
  return {
    todo: state.tasks,
    filtered: state.filtered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => {
      dispatch({
        type: 'ADD_TASK',
        text: text
      })
    },
    deleteTodo: (index) => {
      dispatch({
        type: 'DELETE_TASK',
        index: index
      })
    },
    toggleTodo: (index) => {
      dispatch({
        type: 'TOGGLE_TASK',
        index: index
      })
    },
    toggleFilter: () => {
      dispatch({
        type: 'TOGGLE_FILTER'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);