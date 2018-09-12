import React from 'react';
// import ReactJson from 'react-json-view';

export const customInput = props => {
	const {
		input,
		meta: { touched, error },
	} = props;
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<input {...input} type={props.type} id={props.id} placeholder={props.placeholder} />
			<br />
			{touched && error && <span style={{ color: 'red' }}>{error}</span>}
			{/* <ReactJson src={props} /> */}
		</div>
	);
};

export const customSelect = props => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<select {...props.input} id={props.id}>
				<option />
				<option value="tabs">Tabs</option>
				<option value="spaces">Spaces</option>
			</select>
			{/* <ReactJson src={props} /> */}
		</div>
	);
};
