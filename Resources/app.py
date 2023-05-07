


#Import dependencies
from flask import Flask, jsonify, render_template
from pymongo import MongoClient

app = Flask(__name__)


client = MongoClient(port=27017)
db = client['project3']
collection = db["census"]

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        "Chemicals in Cosmetics!<br/>"
        "Available Routes:<br/>"
        "/api/v1.0/topcompanies<br/>"
        "- Top companies that reported chemicals in their products<br/>"
        "/api/v1.0/categories<br/>"
        "- Primary categories by percent <br/>"
        "/api/v1.0/chemcount<br/>"
        "- Chemical count per category <br/>"
        "/api/v1.0/chemsubs<br/>"
        "- Chemical substance by year <br/>"
    )

@app.route('/data')
def return_data():
    results = collection.find()
    data = []
    for each_result in results:
        data.append({
            "CDPHId": each_result["CDPHId"],
            "ProductName": each_result["ProductName"],
            "CSFId": each_result["CSFId"],
            "CSF": each_result["CSF"],
            "CompanyId": each_result["CompanyId"],
            "CompanyName": each_result["CompanyName"],
            "BrandName": each_result["BrandName"],
            "PrimaryCategoryId": each_result["PrimaryCategoryId"],
            "PrimaryCategory": each_result["PrimaryCategory"],
            "SubCategoryId": each_result["SubCategoryId"],
            "SubCategory": each_result["SubCategory"],
            "CasNumber": each_result["CasNumber"],
            "ChemicalId": each_result["ChemicalId"],
            "ChemicalName": each_result["ChemicalName"],
            "InitialDateReported": each_result["InitialDateReported"],
            "MostRecentDateReported": each_result["MostRecentDateReported"],
            "DiscontinuedDate": each_result["DiscontinuedDate"],
            "ChemicalCreatedAt": each_result["ChemicalCreatedAt"],
            "ChemicalDateRemoved": each_result["ChemicalDateRemoved"],
            "ChemicalCount": each_result["ChemicalCount"]
        })
    return jsonify(data)



@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


