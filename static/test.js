// Get a reference to the fetch button
const fetchButton = document.querySelector('#fetch-button');

// Add an event listener to the fetch button
fetchButton.addEventListener('click', () => {
  // Use fetch to get the data from the Flask server
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      // Group the data by company name and count the number of occurrences
      const counts = data.reduce((accumulator, currentValue) => {
        const name = currentValue.CompanyName;
        if (!accumulator[name]) {
          accumulator[name] = 1;
        } else {
          accumulator[name]++;
        }
        return accumulator;
      }, {});

      // Convert the counts object into an array of objects with keys 'x' and 'y'
      const countsArray = Object.entries(counts).map(([name, count]) => {
        return { x: name, y: count };
      });

      // Create the bar chart using Plotly
      const barData = [{
        x: countsArray.map(obj => obj.x),
        y: countsArray.map(obj => obj.y),
        type: 'bar',
      }];

      const layout = {
        title: 'All Companies Reported', 
        width: 800,
        height: 500,
        margin: {
          l: 100,
          r: 50,
          b: 100,
          t: 50,
          pad: 4
        },
        xaxis: {
          tickangle: -45,
          automargin: true
        }
      };

      Plotly.newPlot('bar-chart', barData,layout);

      // Sort the companies by count in descending order and get the top 10
      const topCompanies = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      // Convert the top companies into an array of objects with keys 'labels' and 'values'
      const topCompaniesArray = topCompanies.map(([name, count]) => {
        return { labels: name, values: count };
      });

      // Create the pie chart using Plotly
      const pieData = [{
        values: topCompaniesArray.map(obj => obj.values),
        labels: topCompaniesArray.map(obj => obj.labels),
        type: 'pie'
      }];

      const pielayout = {
        title: 'Top Companies Reported (by percent)',
        width: 800,
        height: 500,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 50,
          pad: 4
        },
        xaxis: {
          automargin: true
        }
      };
      Plotly.newPlot('pie-chart', pieData,pielayout);

      // Group the data by PrimaryCategory and count the number of occurrences
      const categoryCounts = data.reduce((accumulator, currentValue) => {
        const category = currentValue.PrimaryCategory;
        if (!accumulator[category]) {
          accumulator[category] = 1;
        } else {
          accumulator[category]++;
        }
        return accumulator;
      }, {});

      // Get the top ten PrimaryCategory values and their counts
      const topCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      // Convert the top categories into an array of objects with keys 'x', 'y'
      const categoryArray = topCategories.map(([category, count]) => {
        return { x: category, y: count };
      });

      // Create the scatter plot using Plotly
      const scatterData = [{
        x: categoryArray.map(obj => obj.x),
        y: categoryArray.map(obj => obj.y),
        mode: 'markers',
        type: 'scatter'
      }];

      const scatterLayout = {
        title: 'Count of the Top Primary Categories Reported',
        width: 800,
        height: 500,
        margin: {
          l: 100,
          r: 50,
          b: 100,
          t: 50,
          pad: 4
        },
        xaxis: {
          tickangle: -45,
          automargin: true
        }
      };
      Plotly.newPlot('scatter-plot', scatterData,scatterLayout);
    })
    .catch(error => console.error(error));
});
