
# app.py

This is the Python code for a Flask web application that offers various access points to information about the chemicals used in cosmetics.

First, the code imports the essential dependencies, such as PyMongo, a client library for MongoDB, and Flask, a microweb framework.

The code then launches a Flask instance and connects to the "project3" database in MongoDB and the "census" collection.

The next line of code uses the @app.route decorator to define three routes. The first route ('/') gives back a greeting and specifies all of the alternative routes. The other two routes deliver data in either JSON or HTML format.

The second route ('/data') retrieves every document from the database's "census" collection and adds particular fields from each document to a list. The list is then returned after being JSONified using the jsonify() method.

The third route ('/index') renders the "index.html" HTML template, which is not displayed in the code that is provided.

Finally, if the script is being performed directly, the code launches the Flask application in debug mode.



