from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('hello_flask.html', name = 'betalantz')

app.run(debug=True)hello_flask