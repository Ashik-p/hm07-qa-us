const config = require('../config');

//DELETE Test 1 : Verify the status code is 200 when deleting
test('Ensure the status code is 200', async () => {
	{ const requestBody = {
		"cardId" : 7,
		"name" : "Pet Supplies"
	}
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	}
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

//DELETE Test 2 : Check the body response expected result when deleting the existent kit 
test('Ensure the body responses with "ok": true', async () => {
	{ const requestBody = {
		"cardId" : 7,
		"name" : "Pet Supplies"
	}
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	}
	
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
		actualResponseBody = await response.json();
		console.log(actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBeTruthy();
});