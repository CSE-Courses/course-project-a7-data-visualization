# global variables
import ast

import pandas as pd
from riotwatcher import LolWatcher
from pathlib import Path

def getdic():
    fileName ='champ.txt'
    data_folder = Path("gamedata/infofiles/")

    file_to_open = data_folder / fileName

    with open(file_to_open) as f:
        data = f.read()
    champ_dict = ast.literal_eval(data)

    fileName ='item.txt'
    file_to_open = data_folder / fileName

    with open(file_to_open) as f:
        data = f.read()
    item_dict = ast.literal_eval(data)

    fileName ='spell.txt'
    file_to_open = data_folder / fileName
    with open(file_to_open) as f:
        data = f.read()
    spell_dict = ast.literal_eval(data)

    return champ_dict,item_dict,spell_dict

def getLolData(username, my_region):
    champ_dict,item_dict,spell_dict = getdic()
    lastN = 5
    df = lolDataGrabber(username,my_region,champ_dict,item_dict,spell_dict,lastN)
    return df.to_json()

def getDataTwo(usernameOne,usernameTwo,regionOne,regionTwo):
    lastN = 3
    champ_dict,item_dict,spell_dict = getdic()
    dfOne = lolDataGrabber(usernameOne,regionOne,champ_dict,item_dict,spell_dict,lastN)
    dfTwo = lolDataGrabber(usernameTwo,regionTwo,champ_dict,item_dict,spell_dict,lastN)
    return dfOne,dfTwo

def lolDataGrabber(username, my_region,champ_dict,item_dict,spell_dict,lastN):
    api_key = 'RGAPI-04299da2-03b3-437f-a740-06614aea8813'
    watcher = LolWatcher(api_key)
    me = watcher.summoner.by_name(my_region, username)
    my_matches = watcher.match.matchlist_by_account(my_region, me['accountId'])

    last_five_match = {}
    for row in my_matches['matches'][:lastN]:
        key = (row["gameId"])
        value = row["champion"]
        last_five_match[key] = value

    players = []
    for key in last_five_match:
        match_detail = (watcher.match.by_id(my_region, key))
        participant = match_detail["participants"]
        for row in participant:
            if(row["championId"] == last_five_match[key]):
                participants_row = {}
                participants_row['player'] = username
                participants_row['championName'] = champ_dict[str(row['championId'])]
                participants_row['spell1'] = spell_dict[str(row['spell1Id'])]
                participants_row['spell2'] = spell_dict[str(row['spell2Id'])]
                participants_row['win'] = row['stats']['win']
                participants_row['kills'] = row['stats']['kills']
                participants_row['deaths'] = row['stats']['deaths']
                participants_row['assists'] = row['stats']['assists']
                participants_row['totalDamageDealt'] = row['stats']['totalDamageDealt']
                participants_row['goldEarned'] = row['stats']['goldEarned']
                participants_row['champLevel'] = row['stats']['champLevel']
                participants_row['totalMinionsKilled'] = row['stats']['totalMinionsKilled']
                try:
                    participants_row['item0'] = item_dict[str(row['stats']['item0'])]
                except Exception:
                    participants_row['item0'] = str("Null")
                try:
                    participants_row['item1'] = item_dict[str(row['stats']['item1'])]
                except Exception:
                    participants_row['item1'] = str("Null")
                try:
                    participants_row['item2'] = item_dict[str(row['stats']['item2'])]
                except Exception:
                    participants_row['item2'] = str("Null")
                try:
                    participants_row['item3'] = item_dict[str(row['stats']['item3'])]
                except Exception:
                    participants_row['item3'] = str("Null")
                try:
                    participants_row['item4'] = item_dict[str(row['stats']['item4'])]
                except Exception:
                    participants_row['item4'] = str("Null")
                try:
                    participants_row['item5'] = item_dict[str(row['stats']['item5'])]
                except Exception:
                    participants_row['item5'] = str("Null")
                try:
                    participants_row['item6'] = item_dict[str(row['stats']['item6'])]
                except Exception:
                    participants_row['item6'] = str("Null")

                players.append(participants_row)

    df = pd.DataFrame(players)
    return df



def main():
   print(getLolData("Doublelift", "na1"))


if __name__ == "__main__":
    main()