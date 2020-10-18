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

@app.route("/league1.html", methods=['POST'])
def league():
    gamertag = request.form["Gamertag"]
    region = request.form["Region"]
    df = pd.DataFrame()
    df = loldata.getLolData(gamertag, region)
    return render_template("leagueOfLegendView.html", name='League Of legends Player Data', data=df.to_html())

@app.route("/cod1.html")
def codOne():
    return render_template("cod1.html")


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
