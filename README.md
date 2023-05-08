# Project3-JS

## Project 3 using Java Script

## Proyect overview 
The purpose of this project is to analyse the number of   hazardous and potentially hazardous chemical ingredients reported in cosmetic products. We’ll examine the frecuency of chemical ingredients use, relationships between chemicals per primary category , top reported companies,  and other related relationships derived from the data.

We will create a visualization  in `HTML` coding with  the use of `Python Flask`, `HTML/CSS`, `JavaScript`, and  `MongoDB`.

## Chemicals in Cosmetics Database Proposal
The data that we have chosen to work with has been reported to the California State Cosmetics Program (CSCP) in the California Department of Public Health (CDPH). 
The purpose of the CSPC is to collect information of products that contain any ingredients known or suspected to cause: cancer, birth defects, developmental or reproductive harm. There is a list of “reportable” ingredients in which the California Safe Cosmetics Act requires all the manufacturers, packers, and or distributors to submit if the company has an annual aggregate sale of cosmetic products of 1 million dollars or more and has sold cosmetic products in California on or after January 2007. 

There are 13 primary categories: Baby products, bath products, fragrances, hair care products, hair coloring products, make up products, nail products, oral hygiene products, personal care products, shaving products, skin care products, sun-related products, tattoos and permanent makeup. 

## Finding Data
For this project we fetch and grabbed the data from  https://www.data.gov/ our data set were retrived form https://catalog.data.gov/dataset/chemicals-in-cosmetics-7d6ab

## Data Cleanup and Analysis

### Exploration and clean up

What we first did in this proyect was Upload or CSV data into Mongo with the use of modeulces `csv`,  `json`, `MongoClient`, `pprint`, and `pandas`.

### Analysis

Once having the info in MongoDB we used the back-end framework `Flask` to connect to the MongoDB database using the PyMongo library.
The purpose of this code was to provide a simple web interface that allows the user to interact with the database by performing basic CRUD (Create, Read, Update, Delete) operations.In this part we obtained a  jsonify(data).

Finally we import the data into an `HTML` code which allowed us to create a web page were the user can see and interact with the data. 

The `index.HTML` file links to a JavaScript file called "test.js" that handle the click event on the "Show Info" button and generate the plots using the `Plotly` library. The HTML file also includes a link to a CSS file called "style.css" that defines styles for the elements on the page.

* JavaScript test (test.js)

It uses the fetch API to send a request to the Flask server to retrieve data from the "/data" endpoint and once the response is received, it uses the json() method to extract the response body as JSON. Then it groups the data by company name and counts the number of occurrences for each company and finally it  convert the counts object into an array of objects with keys 'x' and 'y' to can create the plots.

### Plotly

We Created a bar,  pie, and scatter plots chart using Plotly refered to [Plotly.js documentation](https://plot.ly/javascript/) and  [Plotly Bar chart](https://www.youtube.com/watch?v=N1GwQNatOwo).

1) the code grouped the data by company name and counts the number of occurrences for each company.
2) the code created a bar chart using Plotly to display the total count of each company.
3) it sorted the companies by count in descending order and gets the top 10.
4) it created a pie chart using Plotly to display the top companies by percentage of total reports.
5) it grouped the data by primary category and counted the number of occurrences for each category.
6) it created a scatter plor before getting the top 10 primary categories by count and displaying the count of each category.


## Visual references:

1: Pie chart: Top Companies Reported

<img width ="250" alt ="image" src="https://user-images.githubusercontent.com/119386031/236638927-4cbbf0be-2bef-41c4-9cbb-6374f0373d05.png">

2: Scatter Plot: Count of the Top Primary Categories Reported

<img width ="250" alt ="image" src="https://user-images.githubusercontent.com/119386031/236638796-2d188b44-5c79-49c7-b49a-e36472410f18.png">

3: Bar chart: All Companies Reported

<img width ="250" alt ="image" src="https://user-images.githubusercontent.com/119386031/236639016-ad4e2230-8ac2-40a1-a947-76bd726fd835.png">


## Tools and sources

* Javascript
* HTML/CSS
* D3.js
* JSON
* GitHub and GitHub Pages
* console.log
* MongoDB
* Matplotlib.pyplot
* Flask
* Jupyter Notebook


Link to Data Set:
https://catalog.data.gov/dataset/chemicals-in-cosmetics-7d6ab

## Conclusions

## Authors

* **Cesar Cruz Reyes** - **[My github](https://github.com/CsarCruz "GitHub for Cesar Cruz")**
* **Maria Jose García** - **[My github](https://github.com/MajoGarciaMontes "GitHub for Majo García")**
* **Paola Aleman** - **[My github](https://github.com/paoaleman19 "GitHub for Pao Aleman")**
* **Marcela Maldonado** - **[My github](https://github.com/Marce1301 "GitHub for Marcela Maldonado")**

## Acknowledgments

Chemicals in Cosmetics - Catalog. (2023, 29 abril). Retrived from [https://catalog.data.gov/dataset/chemicals-in-cosmetics-7d6ab](https://catalog.data.gov/dataset/chemicals-in-cosmetics-7d6ab/)


## Rubric
* [Project 3 Rubric - Visualizing Data.docx](https://github.com/paoaleman19/Project3-JS/files/11402900/Project.3.Rubric.-.Visualizing.Data.docx)

## Copyright

Copyright:copyright: 2023. All Rights Reserved.

© 2023  Aleman Paola, Cruz Cesar, García Maria Jose, Maldonado Marcela , BootCamp Tecnologico de Monterrey.

