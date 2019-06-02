import Tap          from 'tap';
import KeyGenerator from 'key-generator';

Tap.test('.generateToken() returns a string of the expected length', test => {
	const token = KeyGenerator.generateToken();

	test.ok(token.length === 13);
	test.end();
});

Tap.test('.generateToken() returns different strings every time', test => {
	const seen: string[] = [];

	while (seen.length < 1000) {
		let token = KeyGenerator.generateToken();

		if (seen.includes(token)) {
			test.notOk(`Token ${token} was returned multiple times`);
			return void test.end();
		}

		seen.push(token);
	}

	test.ok('No tokens were returned multiple times');
	test.end();
});
