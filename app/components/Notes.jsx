import React from 'react';
import Note from './Note';

// destructing: {notes} came from props from App.jsx
// defined dummy callback for onDelete in case its not provided
export default ({notes, onDelete = () => {}}) => (
	<ul> 
	{notes.map(({id, task}) => 
		<li key={id}>
			<Note onDelete={onDelete.bind(null, id)} task={task} />
		</li>
	)}
	</ul>
)