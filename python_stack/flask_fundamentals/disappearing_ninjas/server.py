from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja')
def show_all():
    return render_template("4ninjas.html")

@app.route('/ninja/<ninja_color>')
def show_diff(ninja_color):
    if ninja_color == 'blue':
        return render_template("leonardo.html")
    elif ninja_color == 'orange':
        return render_template("michelangelo.html")
    elif ninja_color == 'red':
        return render_template("raphael.html")
    elif ninja_color == 'purple':
        return render_template("donatello.html")
    else:
        return render_template("not_a_ninja.html")
        
app.run(debug=True)
