const config = require('../config');

const requestBody = {

		"ids": [
			1,
			4,
			44
		]
	
}

//Test 1
test('Status code should be 200 OK', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
		console.log(data);
	}
	expect(actualStatus).toBe(200);
});


//Test 2
test('Verify response body contains "Fresh Food"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toHaveProperty("Fresh Food");
});

//Test 3
test('Verify the products in "Fresh Food"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualResponseBody = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["Fresh Food"]).toEqual({"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 3,"Sprite Soft Drink": 12});
});

