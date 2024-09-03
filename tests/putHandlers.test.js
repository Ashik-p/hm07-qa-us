const config = require('../config');

const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 5,
				"quantity": 2
			}
		]
}

//PUT Test 1 : Ensure the response status of the existent kit display 200 OK status code
test('Check the status code is 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`,
		{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


//PUT Test 2 : Verifying the response body gives the correct message
test('Check the body responses with "ok": true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`,
		{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		console.log(actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBeTruthy();
});

//PUT Test 3: Reviewing the non-existent kit gives 404 response
test('Check the status code is 404', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, 
		{	
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(404);
});