from flask import Flask, render_template, request
import pandas as pd
from src.gamedata import loldata

app = Flask(__name__)

"""
UI Code
"""


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def returnhome():
    return render_template("index.html")

@app.route("/league1.html")
def leagueOne():
    return render_template("league1.html")

@app.route("/league2.html")
def leagueTwo():
    return render_template("league2.html")

@app.route("/league2_1.html")
def leagueTwo_1():
    return render_template("league2_1.html")

@app.route("/league2_1.html", methods=['POST'])
def league():
    username = request.form["Search"]
    region = 'na1'
    df = pd.DataFrame()
    df = loldata.getLolData(username, region)
    return render_template("leagueOfLegendView.html", name='League Of legends Player Data', data=df.to_html())

@app.route("/cod1.html")
def codOne():
    return render_template("cod1.html")

@app.route("/cod2.html")
def codTwo():
    return render_template("cod2.html")

@app.route("/cod2___1.html")
def codTwo_one():
    return render_template("cod2___1.html")

@app.route("/cod2___2.html")
def codTwo_Two():
    return render_template("cod2___2.html")

@app.route("/cod2___3.html")
def codTwo_Three():
    return render_template("cod2___3.html")


"""
UI Code
"""

"""
Game data code
"""


@app.route("/codapi")
def cod_landing_page():
    return render_template("test_html_api.html")


"""
Game data code
"""

if __name__ == "__main__":
    app.run(debug=True)
