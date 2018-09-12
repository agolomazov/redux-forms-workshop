import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class App extends Component {
	submit = values => {
		console.log('form data', values);
	};

	getInitialValues = () => {
		return {
			name: 'Anton Golomazov',
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
