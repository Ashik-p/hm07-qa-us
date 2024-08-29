const config = require('../config');

//Test 1
test('Return status code should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

//Test 2
test('Body should contain name = "Fast Delivery"', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualResponseBody = await response.json();
	} catch (error) {
        console.error(error);
	}
	expect(actualResponseBody[2].name).toContain("Fast Delivery");
});


