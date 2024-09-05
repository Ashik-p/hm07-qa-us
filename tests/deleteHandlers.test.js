const config = require('../config');

//Create new resource for POST request
const requestBody = {
	"cardId" : 7,
	"name" : "Pet Supplies"
}
//DELETE Test 1 : Verify the status code is 200 when deleting
test('Ensure the status code is 200', async () => {
	let body;
	let newId;
	let actualStatus;
    try {
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		body = await postResponse.json(); // Parse the post response body to get the newly created id
		newId = body["id"]; //Assume the server returns the newly created id in the body


		const response = await fetch(`${config.API_URL}/api/v1/kits/${newId}`, {
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
		let body;
		let newId;
		let actualResponseBody;
	
    try { 
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		body = await postResponse.json();
		newId = body["id"];


		const response = await fetch(`${config.API_URL}/api/v1/kits/${newId}`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
		actualResponseBody = await response.json();
	
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBeTruthy();
});