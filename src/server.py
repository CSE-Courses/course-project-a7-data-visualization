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
    try:
        df = loldata.getLolData(gamertag, region)
        return render_template("leagueStats.html", name='League Of legends Player Data', data=df)
    except Exception as e:
        return render_template("error.html")

@app.route("/league_leaderboardLanding.html")
def league_leaderbaordone():
    return render_template("league_leaderboardLanding.html")


@app.route("/league_leaderboardLanding.html",methods=['POST'])
def league_leaderbaord():
    typeOfRank = "RANKED_SOLO_5x5"
    region = request.form["Region"]
    try:
        dfcom = loldata.getTopFive(region,typeOfRank)
        finalJs = dfcom.to_json()
        return render_template("league_leaderboard.html", name='League Of legends Player Data', data=finalJs)
    except Exception as e:
        print(e)
        return render_template("error.html")



@app.route("/league_mult.html", methods=['POST'])
def league2():
    gamertagOne = request.form["Gamertag"]
    regionOne = request.form["Region"]
    gamertagTwo = request.form["Gamertag2"]
    regionTwo = request.form["Region2"]
    try:
        dfOne,dfTwo = loldata.getDataTwo(gamertagOne,gamertagTwo, regionOne,regionTwo)
        frames = [dfOne, dfTwo]
        dfcom = pd.concat(frames)
        dfcom.reset_index(drop=True, inplace=True)
        finalJs = dfcom.to_json()
        return render_template("leagueMultiplayerStats.html", name='League Of legends Player Data', data = finalJs)
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

@app.route("/cod_home.html")
def cod_home():
    return render_template("cod_home.html")

@app.route("/cod_mult.html")
def cod_mult():
    return render_template("cod_mult.html")

@app.route("/codMultiplayerStats.html")
def codMultiplayerStats():
    return render_template("codMultiplayerStats.html")

@app.route("/league_home.html")
def league_home():
    return render_template("league_home.html")

@app.route("/league_mult.html")
def league_mult():
    return render_template("league_mult.html")

@app.route("/leagueMultiplayerStats.html")
def leagueMultiplayerStats():
    return render_template("leagueMultiplayerStats.html")

@app.route("/charts.html")
def displayVisuals():
    return render_template("charts.html")

@app.route("/cod_leaderboard.html")
def cod_leaderbaord():
    return render_template("cod_leaderboard.html")

if __name__ == "__main__":
    app.run(debug=True)
