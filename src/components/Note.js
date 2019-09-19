import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Note = () => {
	const [value, setValue] = useState('');
	const [note, setNote] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setNote(value);
		setValue('');
	};

	const showNote =
		note === '' ? (
			<form className="note">
				<TextField
					multiline
					variant="outlined"
					id="input"
					placeholder="Enter notes here"
					fullWidth
					margin="normal"
					inputProps={{
						style: {
							height: '40px',
						},
					}}
					value={value}
					InputLabelProps={{
						shrink: true,
					}}
					onChange={e => setValue(e.target.value)}
				/>
				<Button onClick={handleSubmit} variant="contained" color="primary" type="submit" id="button">
					Save notes
				</Button>
			</form>
		) : (
			<div data-test-note="note">
				<strong>Note:</strong> {note}
			</div>
		);
	return <div>{showNote}</div>;
};

export default Note;
