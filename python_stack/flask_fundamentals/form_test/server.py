from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print "Got POST info"
    name = request.form['name']
    email = request.form['email']
    print name, email
    return redirect('/')
app.run(debug=True)