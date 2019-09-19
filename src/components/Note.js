import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Note = props => {
	const [value, setValue] = useState('');
	const [note, setNote] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setNote(value);
		setValue('');
	};

	return (
		<div>
			<div data-test-note="note">{note}</div>
			<form>
				<input id="input" value={value} onChange={e => setValue(e.target.value)} />
				<button id="button" onClick={handleSubmit}>
					submit
				</button>
			</form>
		</div>
	);
};

export default Note;
