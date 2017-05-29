import React from 'react';

export default({editing, value, onEdit, ...props}) => {
	if(editing) {
		return <Edit value={value} onEdit={onEdit} {...props} />;
	}

	return <span {...props}> {value} </span>;
}

// this.props.onEdit(value) is returned to Notes <Editable>
// which completes the partial bind function of
// onEdit(null, id) to onEdit(id, value) which is then returned to 
// App's editNote(id, task) function to update state! 
class Edit extends React.Component {
	render() {
		const {value, onEdit, ...props} = this.props;

		return <input
			type="text"
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