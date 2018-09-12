import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class App extends Component {
	submit = values => {
		const coupones = values.discountCodes.filter(value => value !== undefined);
		console.log('discounts', coupones);
	};

	getInitialValues = () => {
		return {
			preference: 'tabs',
			newsletter: true,
		};
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Simple sign-up form</h1>
				</header>
				<RegisterForm onSubmit={this.submit} initialValues={this.getInitialValues()} />
			</div>
		);
	}
}

export default App;
