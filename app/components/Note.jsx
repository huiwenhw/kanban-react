import React from 'react';

// <Note> <span> <button> </Note>
// <span> && <button> are props in {children}
export default ({children, ...props}) => (
	<div {...props}>
		{children}
	</div>
);