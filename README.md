# Sprint 7 Project: API Testing

## Description
This project is assigned by Tripleten from Sprint 7 which is aimed to write API tests for  GET, POST, PUT, and DELETE requests by utilizing the techniques and technologies for HTTP code verification and inspect the response body with correct details.

## Tools and Technologies
The tools and technologies used in this project are mentioned below:
* Language: Javascript
* Platform: NodeJS 
* Framework: Jest
* Code Editor: VS Code

## Set up the project
* Link Github account to Tripleten by clicking “Link Github account”.
* Clone the repository[hm07-qa-us] using by using the command: 
``` bashgit clone git@github.com:Ashik-p/hm07-qa-us.git
```
* Open the project folder in VS Code and start with the project.

## Urban Grocers Server
* Use the variable config.js as API endpoint to store the link generated.
* Ensure to replace API URL as it is a temporary server.
* Refer to apiDoc: API URL + /docs/ or API URL + /api/swagger  to check the endpoints.


## Instructions for Running Tests
The project contains 5 tasks in which the HTTP request method is used to test the request. They are in the following test suites:

#### Task 1: GET request 

getHandlers.test.js

There are 2 tests in this suite:

* Test 1: Select an API endpoints for the GET request with a request body to extract the HTTP status code response 200 OK.

* Test 2 : Verify to parse the response as JSON and contains the expected result in the response body.


Run the test in VS code terminal by using the command:
``` bash
npx jest getHandlers.test.js
```

#### Task 2: POST request 

postHandlers.test.js

There are 2 tests in this suite:

* Test 1 : Choose an API endpoint for the POST request test with a request body to validate the HTTP response code is 200 OK.

* Test 2 : Examine the response body is parsed into JSON and contains the expected result in the response body.

* Test 3 : Ensure the response body is parsed and contains the anticipated data. 

Run the test in VS code terminal by using the command:
``` bash 
npx jest postHandlers.test.js
```

#### Task 3: PUT request 

putHandlers.test.js

There are 2 tests in this suite:

* Test 1: Review the HTTP status code response 200 OK in the response body after selecting the API endpoint  for the PUT request.

* Test 2 : Check the response is parsed into JSON and contains the expected data in the response body.

* Test 3 : Ensure the response body is parsed and matches the expected data.

Run the test in VS code terminal by using the command:
``` bash
npx jest putHandlers.test.js
```

#### Task 4: DELETE request 

deleteHandlers.test.js

There are 2 tests in this suite:

* Test 1: Select an API endpoint for the DELETE request to validate the HTTP status code is  200 OK.

* Test 2 : Verify to parse the response body and ensure it contains the expected result.

Run the test in VS code terminal by using the command:
``` bash
npx jest deleteHandlers.test.js
```
