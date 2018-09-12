import React from 'react';
import cx from 'classnames';
import { Field } from 'redux-form';
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
			<input
				{...input}
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				autoFocus={props.autoFocus}
			/>
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

export const discounts = ({ fields }) => (
	<div className="custom-field-array-container">
		{fields.map((code, index) => (
			<div key={index} className="field-array-item">
				<Field
					name={code}
					type="text"
					component={customInput}
					label={`Discount Code #${index + 1}`}
					autoFocus
				/>
				<button type="button" onClick={() => fields.remove(index)}>
					&times;
				</button>
			</div>
		))}
		<button type="button" onClick={() => fields.push()}>
			Add {!fields.length ? 'Discount Code(s)' : 'Another'}
		</button>
	</div>
);
