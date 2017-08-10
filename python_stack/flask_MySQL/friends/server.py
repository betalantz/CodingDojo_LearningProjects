from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    print request.form['first_name']
    print request.form['last_name']
    print request.form['age']
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO friends (first_name, last_name, age, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :age, :occupation, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    occupation = 'N/A'
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'age': request.form['age'],
             'occupation': occupation
           }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    # add a friend to the database!
    return redirect('/')


app.run(debug=True)