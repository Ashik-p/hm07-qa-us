const config = require('../config');

const requestBody = {

		"ids": [
			1,
			4,
			44
		]
	
}

//POST Test 1: Ensure the reponse body provides 200 status code
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


//POST Test 2: Check the reponse body has the data as per API requirement
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

//Test 3 : Checking the response body contains the required items in Fresh food warehouse 
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
