from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
    return render_template("result.html", 
        name=request.form['name'],
        location = request.form['location'],
        language = request.form['language'],
        comment = request.form['comment'])

# @app.route('/result')
# def show_results():
#     return redirect ('/')

app.run(debug=True)