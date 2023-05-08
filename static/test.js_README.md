
# test.js

This code fetches data from a Flask server when the fetch button is clicked, then it processes the data and creates three charts using the Plotly library: a bar chart of all companies reported, a pie chart of the top 10 companies reported (by percent), and a scatter plot of the top 10 primary categories reported. 

Here's what the code does step by step:

- Gets a reference to the fetch button element on the HTML page using `document.querySelector('#fetch-button')`.
- Adds an event listener to the fetch button using `.addEventListener('click', () => {...})`. The event listener is a function that will be called when the button is clicked.
- Inside the event listener, the code uses the `fetch()` method to make a request to the server's `/data` endpoint and retrieves the response in JSON format using `.then(response => response.json())`.
- The data retrieved is then processed to group the data by company name, count the number of occurrences of each company, and sort the companies by count in descending order to get the top 10 companies. The same is done for primary categories to get the top 10 primary categories.
- The processed data is then converted into the appropriate format for each chart: an array of objects with keys 'x' and 'y' for the bar chart and scatter plot, and an array of objects with keys 'values' and 'labels' for the pie chart.
- The bar chart, pie chart, and scatter plot are created using `Plotly.newPlot()` and displayed on the HTML page by passing the ID of each chart's container element as the first argument.
- Any errors that occur during the fetch or processing of data are caught and logged to the console using `.catch(error => console.error(error))`.





