import React from 'react';
import Note from './Note';
import Editable from './Editable';

// destructuring: {notes} came from props from App.jsx
// defined dummy callback for onDelete in case its not provided
// what if its provided?  
// partial bind onDelete func with id of this particular note
export default ({notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {}}) => (
	<ul className="notes"> 
	{notes.map(({id, editing, task}) => 
		<li key={id}>
			<Note className="note" onClick={onNoteClick.bind(null, id)}>
				<Editable 
					className = "editable"
					editing = {editing}
					value = {task}
					onEdit={onEdit.bind(null, id)} />
				<button 
					className = "delete"
					onClick={onDelete.bind(null, id)}>x</button>
			</Note>
		</li>
	)}
	</ul>
)