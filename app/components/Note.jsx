import React from 'react';

// Note controls what's rendered here
// Renders passed task & connects deletion button 
export default ({task, onDelete}) => (
	<div> 
		<span> {task} </span>
		<button onClick={onDelete}> x </button>
	</div>
);