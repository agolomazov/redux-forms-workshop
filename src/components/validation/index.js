export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 4 ? 'Value must be at leasr 4 characters' : undefined);

export const maxLength = value => (value.length > 10 ? 'Value is too long' : undefined);

export const matchesPassword = (value, values) => (value === values.password ? undefined : 'Passwords is not matches');

export const asyncValidate = async values => {
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	await sleep(1000);
	if (['kent', 'addy', 'john'].includes(values.username)) {
		console.log('I am here!');
		return Promise.reject({
			username: 'Username already taken',
		});
	}
};
