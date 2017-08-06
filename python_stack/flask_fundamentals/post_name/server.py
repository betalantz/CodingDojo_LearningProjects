# importing required Flask modules
from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# setting the root route and method which will display the landing page
@app.route('/')
def index():
    return render_template("index.html")
# setting up a route to handle the post from the root
@app.route('/process', methods=['POST'])
def create_user():
    name = request.form['name']
    print name
    return redirect('/')

app.run(debug=True)