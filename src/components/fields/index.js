import React from 'react';
import cx from 'classnames';
// import ReactJson from 'react-json-view';

const getValidityClassName = ({ active, invalid, touched, valid, asyncValidating }) => {
	if (asyncValidating) {
		return 'async-validating';
	}

	if (active) {
		return;
	}

	if (touched && invalid) {
		return 'invalid';
	}

	if (touched && valid) {
		return 'valid';
	}
};

export const customInput = props => {
	const {
		input,
		meta: { touched, error, dirty },
	} = props;
	return (
		<div
			className={cx(
				'custom-input-container',
				{ 'flex-row-reverse': props.type === 'checkbox' },
				{ dirty: dirty },
				getValidityClassName(props.meta)
			)}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input {...input} type={props.type} id={props.id} placeholder={props.placeholder} />
			<br />
			{touched && error && <span className="feedback-text error-text">{error}</span>}
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
