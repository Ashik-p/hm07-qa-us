const config = require('../config');

//Test 1
test('Ensure the status code is 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
		console.log(data);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

//Test 2
test('Ensure the body responses with "ok": true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
		actualResponseBody = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBeTruthy();
});