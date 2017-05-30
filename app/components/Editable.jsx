import React from 'react';
import classnames from 'classnames';

// classnames joins classNames together 
// classnames('value', className) === 'value editable' 
export default({editing, value, onEdit, className, ...props}) => {
	if(editing) {
		return <Edit 
			className = {className}
			value = {value} 
			onEdit = {onEdit} 
			{...props} />;
	}

	return <span className = {classnames('value', className)} {...props}> 
		{value} </span>;
}

// this.props.onEdit(value) is returned to Notes <Editable>
// which completes the partial bind function of
// onEdit(null, id) to onEdit(id, value) which is then returned to 
// App's editNote(id, task) function to update state! 
class Edit extends React.Component {
	render() {
		const {value, onEdit, className, ...props} = this.props;

		return <input
			type="text"
			className = {classnames('edit', className)}
			autoFocus = {true}
			defaultValue = {value}
			onBlur = {this.finishEdit}
			onKeyPress = {this.checkEnter}
			{...props} />;
	}

	checkEnter = (e) => {
		if(e.key === 'Enter') {
			this.finishEdit(e);
		}
	}

	finishEdit = (e) => {
		const value = e.target.value;

		if(this.props.onEdit) {
			this.props.onEdit(value);
		}
	}
}