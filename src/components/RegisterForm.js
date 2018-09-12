import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from './fields';
import { validate } from './validation';

class RegisterForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name="firstname"
						id="firstname"
						type="text"
						component={customInput}
						placeholder="Enter your first name"
						label="First name"
					/>
				</div>
				<div>
					<Field
						name="surname"
						id="surname"
						type="text"
						component={customInput}
						placeholder="Enter your surname"
						label="Surname"
					/>
				</div>
				<div>
					<Field
						name="username"
						id="username"
						type="text"
						component={customInput}
						placeholder="Enter your username"
						label="Username"
					/>
				</div>
				<div>
					<Field name="preference" component={customSelect} id="preference" label="Preferred of Formatting" />
				</div>
				<div>
					<Field
						name="newsletter"
						component={customInput}
						id="newsletter"
						type="checkbox"
						label="Sign up to newsletter?"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registerForm',
	validate,
})(RegisterForm);
