import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import capitalize from 'capitalize';
import { customInput, customSelect, discounts } from './fields';
import { required, minLength, maxLength, matchesPassword, asyncValidate } from './validation';
import './RegisterForm.css';

class RegisterForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field
					name="firstname"
					id="firstname"
					type="text"
					component={customInput}
					placeholder="Enter your first name"
					label="First name"
					validate={[required]}
					normalize={capitalize}
				/>
				<Field
					name="surname"
					id="surname"
					type="text"
					component={customInput}
					placeholder="Enter your surname"
					label="Surname"
					validate={[required]}
					normalize={capitalize}
				/>
				<Field
					name="username"
					id="username"
					type="text"
					component={customInput}
					placeholder="Enter your username"
					label="Username"
					validate={[required, minLength, maxLength]}
					normalize={capitalize}
				/>
				<Field
					name="password"
					id="password"
					type="password"
					component={customInput}
					placeholder="Enter password"
					label="Password"
					validate={[required]}
				/>
				<Field
					name="confirm-password"
					id="confirm-password"
					type="password"
					component={customInput}
					placeholder="Confirm password"
					label="Confirm password"
					validate={[required, matchesPassword]}
				/>
				<Field name="preference" component={customSelect} id="preference" label="Preferred of Formatting" />
				<Field
					name="newsletter"
					component={customInput}
					id="newsletter"
					type="checkbox"
					label="Sign up to newsletter?"
				/>
				<FieldArray name="discountCodes" component={discounts} />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registerForm',
	asyncValidate,
	asyncBlurFields: ['username'],
})(RegisterForm);
