**Test.js Explanation**
What is happening in this code is that the block retrieves information from the Flask API running on localhost 127.0.0.1. 
The query parameter being supplied is CompanyId=$CompanyId, and the endpoint of the API being accessed is /data. 
CompanyId is set to have a value of 338.
The response from the API is represented as a Promise object that the get method returns. By invoking the json() method on 
the response object, the first then method extracts the response body as a JSON object.
The second then method uses the generated JSON data to perform an action and logs it to the console for debugging reasons. 
The code does not specify this step, however it might involve rendering the data on a website, for instance.
