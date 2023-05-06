# Project3-JS

## Project 3 using Java Script

## JsontoMongoDB

With this code our intention is convert the `csv` data file to a `json` file stored in `MongoDB`.

The code first imports the required modules: `csv`, `json`, `MongoClient`, `pprint`, and `pandas`. It then sets the file paths for the `CSV` and `JSON` files.

Next, the CSV file is read using the DictReader method and converted into a list of dictionaries called "data". This list is then written to a JSON file with indentation using the dump method of the json module.

We first created an instance of MongoClient, the we assigned the database to a variable called `project3` and we assigned the collection to a variable called `census`.

To import the file into Mongo we use the terminal path : C:\mongoimport.exe --type json -d project3 -c census --drop --jsonArray census.json

Finally this MongoDB will serve us as our input to connect to the `HTML` through `flask`.
