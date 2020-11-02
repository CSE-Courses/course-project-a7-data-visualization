from flask import Flask, render_template, request
import pandas as pd
from src.gamedata import loldata

app = Flask(__name__)

"""
UI Code
"""


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
    try:
        df = loldata.getLolData(gamertag, region)
        return render_template("leagueStats.html", name='League Of legends Player Data', data=df.to_json())
    except Exception as e:
        return render_template("error.html")

@app.route("/cod1.html")
def codOne():
    return render_template("cod1.html")

@app.route("/codStats.html")
def codStats():
    return render_template("codStats.html")

@app.route("/error.html")
def error():
    return render_template("error.html")


@app.route("/")
def render_chart():
    return render_template("barChart.html")

@app.route("/bar")
def render_bar():
    return render_template("barChart.html")

@app.route("/line")
def render_line():
    return render_template("lineChart.html")

@app.route("/radar")
def render_radar():
    return render_template("radarChart.html")

@app.route("/pie")
def render_pie():
    return render_template("pieChart.html")


if __name__ == "__main__":
    app.run(debug=True)
