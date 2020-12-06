# global variables
import ast
import json
import urllib
from urllib.request import Request

import pandas as pd
from pandas.core.algorithms import take
from riotwatcher import LolWatcher
from pathlib import Path
from pantheon import pantheon
import asyncio

import time


def getdic():
    champ_dict = {'266': ['Aatrox.png', '../static/champion/Aatrox.png'], '103': ['Ahri.png', '../static/champion/Ahri.png'], '84': ['Akali.png', '../static/champion/Akali.png'], '12': ['Alistar.png', '../static/champion/Alistar.png'], '32': ['Amumu.png', '../static/champion/Amumu.png'], '34': ['Anivia.png', '../static/champion/Anivia.png'], '1': ['Annie.png', '../static/champion/Annie.png'], '523': ['Aphelios.png', '../static/champion/Aphelios.png'], '22': ['Ashe.png', '../static/champion/Ashe.png'], '136': ['AurelionSol.png', '../static/champion/AurelionSol.png'], '268': ['Azir.png', '../static/champion/Azir.png'], '432': ['Bard.png', '../static/champion/Bard.png'], '53': ['Blitzcrank.png', '../static/champion/Blitzcrank.png'], '63': ['Brand.png', '../static/champion/Brand.png'], '201': ['Braum.png', '../static/champion/Braum.png'], '51': ['Caitlyn.png', '../static/champion/Caitlyn.png'], '164': ['Camille.png', '../static/champion/Camille.png'], '69': ['Cassiopeia.png', '../static/champion/Cassiopeia.png'], '31': ['Chogath.png', '../static/champion/Chogath.png'], '42': ['Corki.png', '../static/champion/Corki.png'], '122': ['Darius.png', '../static/champion/Darius.png'], '131': ['Diana.png', '../static/champion/Diana.png'], '119': ['Draven.png', '../static/champion/Draven.png'], '36': ['DrMundo.png', '../static/champion/DrMundo.png'], '245': ['Ekko.png', '../static/champion/Ekko.png'], '60': ['Elise.png', '../static/champion/Elise.png'], '28': ['Evelynn.png', '../static/champion/Evelynn.png'], '81': ['Ezreal.png', '../static/champion/Ezreal.png'], '9': ['Fiddlesticks.png', '../static/champion/Fiddlesticks.png'], '114': ['Fiora.png', '../static/champion/Fiora.png'], '105': ['Fizz.png', '../static/champion/Fizz.png'], '3': ['Galio.png', '../static/champion/Galio.png'], '41': ['Gangplank.png', '../static/champion/Gangplank.png'], '86': ['Garen.png', '../static/champion/Garen.png'], '150': ['Gnar.png', '../static/champion/Gnar.png'], '79': ['Gragas.png', '../static/champion/Gragas.png'], '104': ['Graves.png', '../static/champion/Graves.png'], '120': ['Hecarim.png', '../static/champion/Hecarim.png'], '74': ['Heimerdinger.png', '../static/champion/Heimerdinger.png'], '420': ['Illaoi.png', '../static/champion/Illaoi.png'], '39': ['Irelia.png', '../static/champion/Irelia.png'], '427': ['Ivern.png', '../static/champion/Ivern.png'], '40': ['Janna.png', '../static/champion/Janna.png'], '59': ['JarvanIV.png', '../static/champion/JarvanIV.png'], '24': ['Jax.png', '../static/champion/Jax.png'], '126': ['Jayce.png', '../static/champion/Jayce.png'], '202': ['Jhin.png', '../static/champion/Jhin.png'], '222': ['Jinx.png', '../static/champion/Jinx.png'], '145': ['Kaisa.png', '../static/champion/Kaisa.png'], '429': ['Kalista.png', '../static/champion/Kalista.png'], '43': ['Karma.png', '../static/champion/Karma.png'], '30': ['Karthus.png', '../static/champion/Karthus.png'], '38': ['Kassadin.png', '../static/champion/Kassadin.png'], '55': ['Katarina.png', '../static/champion/Katarina.png'], '10': ['Kayle.png', '../static/champion/Kayle.png'], '141': ['Kayn.png', '../static/champion/Kayn.png'], '85': ['Kennen.png', '../static/champion/Kennen.png'], '121': ['Khazix.png', '../static/champion/Khazix.png'], '203': ['Kindred.png', '../static/champion/Kindred.png'], '240': ['Kled.png', '../static/champion/Kled.png'], '96': ['KogMaw.png', '../static/champion/KogMaw.png'], '7': ['Leblanc.png', '../static/champion/Leblanc.png'], '64': ['LeeSin.png', '../static/champion/LeeSin.png'], '89': ['Leona.png', '../static/champion/Leona.png'], '876': ['Lillia.png', '../static/champion/Lillia.png'], '127': ['Lissandra.png', '../static/champion/Lissandra.png'], '236': ['Lucian.png', '../static/champion/Lucian.png'], '117': ['Lulu.png', '../static/champion/Lulu.png'], '99': ['Lux.png', '../static/champion/Lux.png'], '54': ['Malphite.png', '../static/champion/Malphite.png'], '90': ['Malzahar.png', '../static/champion/Malzahar.png'], '57': ['Maokai.png', '../static/champion/Maokai.png'], '11': ['MasterYi.png', '../static/champion/MasterYi.png'], '21': ['MissFortune.png', '../static/champion/MissFortune.png'], '62': ['MonkeyKing.png', '../static/champion/MonkeyKing.png'], '82': ['Mordekaiser.png', '../static/champion/Mordekaiser.png'], '25': ['Morgana.png', '../static/champion/Morgana.png'], '267': ['Nami.png', '../static/champion/Nami.png'], '75': ['Nasus.png', '../static/champion/Nasus.png'], '111': ['Nautilus.png', '../static/champion/Nautilus.png'], '518': ['Neeko.png', '../static/champion/Neeko.png'], '76': ['Nidalee.png', '../static/champion/Nidalee.png'], '56': ['Nocturne.png', '../static/champion/Nocturne.png'], '20': ['Nunu.png', '../static/champion/Nunu.png'], '2': ['Olaf.png', '../static/champion/Olaf.png'], '61': ['Orianna.png', '../static/champion/Orianna.png'], '516': ['Ornn.png', '../static/champion/Ornn.png'], '80': ['Pantheon.png', '../static/champion/Pantheon.png'], '78': ['Poppy.png', '../static/champion/Poppy.png'], '555': ['Pyke.png', '../static/champion/Pyke.png'], '246': ['Qiyana.png', '../static/champion/Qiyana.png'], '133': ['Quinn.png', '../static/champion/Quinn.png'], '497': ['Rakan.png', '../static/champion/Rakan.png'], '33': ['Rammus.png', '../static/champion/Rammus.png'], '421': ['RekSai.png', '../static/champion/RekSai.png'], '58': ['Renekton.png', '../static/champion/Renekton.png'], '107': ['Rengar.png', '../static/champion/Rengar.png'], '92': ['Riven.png', '../static/champion/Riven.png'], '68': ['Rumble.png', '../static/champion/Rumble.png'], '13': ['Ryze.png', '../static/champion/Ryze.png'], '360': ['Samira.png', '../static/champion/Samira.png'], '113': ['Sejuani.png', '../static/champion/Sejuani.png'], '235': ['Senna.png', '../static/champion/Senna.png'], '147': ['Seraphine.png', '../static/champion/Seraphine.png'], '875': ['Sett.png', '../static/champion/Sett.png'], '35': ['Shaco.png', '../static/champion/Shaco.png'], '98': ['Shen.png', '../static/champion/Shen.png'], '102': ['Shyvana.png', '../static/champion/Shyvana.png'], '27': ['Singed.png', '../static/champion/Singed.png'], '14': ['Sion.png', '../static/champion/Sion.png'], '15': ['Sivir.png', '../static/champion/Sivir.png'], '72': ['Skarner.png', '../static/champion/Skarner.png'], '37': ['Sona.png', '../static/champion/Sona.png'], '16': ['Soraka.png', '../static/champion/Soraka.png'], '50': ['Swain.png', '../static/champion/Swain.png'], '517': ['Sylas.png', '../static/champion/Sylas.png'], '134': ['Syndra.png', '../static/champion/Syndra.png'], '223': ['TahmKench.png', '../static/champion/TahmKench.png'], '163': ['Taliyah.png', '../static/champion/Taliyah.png'], '91': ['Talon.png', '../static/champion/Talon.png'], '44': ['Taric.png', '../static/champion/Taric.png'], '17': ['Teemo.png', '../static/champion/Teemo.png'], '412': ['Thresh.png', '../static/champion/Thresh.png'], '18': ['Tristana.png', '../static/champion/Tristana.png'], '48': ['Trundle.png', '../static/champion/Trundle.png'], '23': ['Tryndamere.png', '../static/champion/Tryndamere.png'], '4': ['TwistedFate.png', '../static/champion/TwistedFate.png'], '29': ['Twitch.png', '../static/champion/Twitch.png'], '77': ['Udyr.png', '../static/champion/Udyr.png'], '6': ['Urgot.png', '../static/champion/Urgot.png'], '110': ['Varus.png', '../static/champion/Varus.png'], '67': ['Vayne.png', '../static/champion/Vayne.png'], '45': ['Veigar.png', '../static/champion/Veigar.png'], '161': ['Velkoz.png', '../static/champion/Velkoz.png'], '254': ['Vi.png', '../static/champion/Vi.png'], '112': ['Viktor.png', '../static/champion/Viktor.png'], '8': ['Vladimir.png', '../static/champion/Vladimir.png'], '106': ['Volibear.png', '../static/champion/Volibear.png'], '19': ['Warwick.png', '../static/champion/Warwick.png'], '498': ['Xayah.png', '../static/champion/Xayah.png'], '101': ['Xerath.png', '../static/champion/Xerath.png'], '5': ['XinZhao.png', '../static/champion/XinZhao.png'], '157': ['Yasuo.png', '../static/champion/Yasuo.png'], '777': ['Yone.png', '../static/champion/Yone.png'], '83': ['Yorick.png', '../static/champion/Yorick.png'], '350': ['Yuumi.png', '../static/champion/Yuumi.png'], '154': ['Zac.png', '../static/champion/Zac.png'], '238': ['Zed.png', '../static/champion/Zed.png'], '115': ['Ziggs.png', '../static/champion/Ziggs.png'], '26': ['Zilean.png', '../static/champion/Zilean.png'], '142': ['Zoe.png', '../static/champion/Zoe.png'], '143': ['Zyra.png', '../static/champion/Zyra.png']}
    item_dict = {'1001': '../static/item/1001.png', '1004': '../static/item/1004.png', '1006': '../static/item/1006.png', '1011': '../static/item/1011.png', '1018': '../static/item/1018.png', '1026': '../static/item/1026.png', '1027': '../static/item/1027.png', '1028': '../static/item/1028.png', '1029': '../static/item/1029.png', '1031': '../static/item/1031.png', '1033': '../static/item/1033.png', '1035': '../static/item/1035.png', '1036': '../static/item/1036.png', '1037': '../static/item/1037.png', '1038': '../static/item/1038.png', '1039': '../static/item/1039.png', '1042': '../static/item/1042.png', '1043': '../static/item/1043.png', '1052': '../static/item/1052.png', '1053': '../static/item/1053.png', '1054': '../static/item/1054.png', '1055': '../static/item/1055.png', '1056': '../static/item/1056.png', '1057': '../static/item/1057.png', '1058': '../static/item/1058.png', '1082': '../static/item/1082.png', '1083': '../static/item/1083.png', '2003': '../static/item/2003.png', '2010': '../static/item/2010.png', '2015': '../static/item/2015.png', '2031': '../static/item/2031.png', '2033': '../static/item/2033.png', '2051': '../static/item/2051.png', '2052': '../static/item/2052.png', '2055': '../static/item/2055.png', '2065': '../static/item/2065.png', '2138': '../static/item/2138.png', '2139': '../static/item/2139.png', '2140': '../static/item/2140.png', '2403': '../static/item/2403.png', '2419': '../static/item/2419.png', '2420': '../static/item/2420.png', '2421': '../static/item/2421.png', '2422': '../static/item/2422.png', '2423': '../static/item/2423.png', '2424': '../static/item/2424.png', '3001': '../static/item/3001.png', '3003': '../static/item/3003.png', '3004': '../static/item/3004.png', '3006': '../static/item/3006.png', '3009': '../static/item/3009.png', '3011': '../static/item/3011.png', '3020': '../static/item/3020.png', '3024': '../static/item/3024.png', '3026': '../static/item/3026.png', '3031': '../static/item/3031.png', '3033': '../static/item/3033.png', '3035': '../static/item/3035.png', '3036': '../static/item/3036.png', '3040': '../static/item/3040.png', '3041': '../static/item/3041.png', '3042': '../static/item/3042.png', '3043': '../static/item/3043.png', '3044': '../static/item/3044.png', '3046': '../static/item/3046.png', '3047': '../static/item/3047.png', '3048': '../static/item/3048.png', '3050': '../static/item/3050.png', '3051': '../static/item/3051.png', '3053': '../static/item/3053.png', '3057': '../static/item/3057.png', '3065': '../static/item/3065.png', '3066': '../static/item/3066.png', '3067': '../static/item/3067.png', '3068': '../static/item/3068.png', '3070': '../static/item/3070.png', '3071': '../static/item/3071.png', '3072': '../static/item/3072.png', '3074': '../static/item/3074.png', '3075': '../static/item/3075.png', '3076': '../static/item/3076.png', '3077': '../static/item/3077.png', '3078': '../static/item/3078.png', '3082': '../static/item/3082.png', '3083': '../static/item/3083.png', '3085': '../static/item/3085.png', '3086': '../static/item/3086.png', '3089': '../static/item/3089.png', '3091': '../static/item/3091.png', '3094': '../static/item/3094.png', '3095': '../static/item/3095.png', '3100': '../static/item/3100.png', '3102': '../static/item/3102.png', '3105': '../static/item/3105.png', '3107': '../static/item/3107.png', '3108': '../static/item/3108.png', '3109': '../static/item/3109.png', '3110': '../static/item/3110.png', '3111': '../static/item/3111.png', '3112': '../static/item/3112.png', '3113': '../static/item/3113.png', '3114': '../static/item/3114.png', '3115': '../static/item/3115.png', '3116': '../static/item/3116.png', '3117': '../static/item/3117.png', '3123': '../static/item/3123.png', '3124': '../static/item/3124.png', '3133': '../static/item/3133.png', '3134': '../static/item/3134.png', '3135': '../static/item/3135.png', '3139': '../static/item/3139.png', '3140': '../static/item/3140.png', '3142': '../static/item/3142.png', '3143': '../static/item/3143.png', '3145': '../static/item/3145.png', '3152': '../static/item/3152.png', '3153': '../static/item/3153.png', '3155': '../static/item/3155.png', '3156': '../static/item/3156.png', '3157': '../static/item/3157.png', '3158': '../static/item/3158.png', '3165': '../static/item/3165.png', '3177': '../static/item/3177.png', '3179': '../static/item/3179.png', '3181': '../static/item/3181.png', '3184': '../static/item/3184.png', '3190': '../static/item/3190.png', '3191': '../static/item/3191.png', '3193': '../static/item/3193.png', '3211': '../static/item/3211.png', '3222': '../static/item/3222.png', '3330': '../static/item/3330.png', '3340': '../static/item/3340.png', '3363': '../static/item/3363.png', '3364': '../static/item/3364.png', '3400': '../static/item/3400.png', '3504': '../static/item/3504.png', '3508': '../static/item/3508.png', '3513': '../static/item/3513.png', '3599': '../static/item/3599.png', '3600': '../static/item/3600.png', '3742': '../static/item/3742.png', '3748': '../static/item/3748.png', '3801': '../static/item/3801.png', '3802': '../static/item/3802.png', '3814': '../static/item/3814.png', '3850': '../static/item/3850.png', '3851': '../static/item/3851.png', '3853': '../static/item/3853.png', '3854': '../static/item/3854.png', '3855': '../static/item/3855.png', '3857': '../static/item/3857.png', '3858': '../static/item/3858.png', '3859': '../static/item/3859.png', '3860': '../static/item/3860.png', '3862': '../static/item/3862.png', '3863': '../static/item/3863.png', '3864': '../static/item/3864.png', '3916': '../static/item/3916.png', '4005': '../static/item/4005.png', '4401': '../static/item/4401.png', '4403': '../static/item/4403.png', '4628': '../static/item/4628.png', '4629': '../static/item/4629.png', '4630': '../static/item/4630.png', '4632': '../static/item/4632.png', '4633': '../static/item/4633.png', '4635': '../static/item/4635.png', '4636': '../static/item/4636.png', '4637': '../static/item/4637.png', '4638': '../static/item/4638.png', '4641': '../static/item/4641.png', '4642': '../static/item/4642.png', '4643': '../static/item/4643.png', '6029': '../static/item/6029.png', '6035': '../static/item/6035.png', '6333': '../static/item/6333.png', '6609': '../static/item/6609.png', '6616': '../static/item/6616.png', '6617': '../static/item/6617.png', '6630': '../static/item/6630.png', '6631': '../static/item/6631.png', '6632': '../static/item/6632.png', '6653': '../static/item/6653.png', '6655': '../static/item/6655.png', '6656': '../static/item/6656.png', '6660': '../static/item/6660.png', '6662': '../static/item/6662.png', '6664': '../static/item/6664.png', '6670': '../static/item/6670.png', '6671': '../static/item/6671.png', '6672': '../static/item/6672.png', '6673': '../static/item/6673.png', '6675': '../static/item/6675.png', '6676': '../static/item/6676.png', '6677': '../static/item/6677.png', '6691': '../static/item/6691.png', '6692': '../static/item/6692.png', '6693': '../static/item/6693.png', '6694': '../static/item/6694.png', '6695': '../static/item/6695.png'}
    spell_dict = {'21': '../static/spells/SummonerBarrier.png', '1': '../static/spells/SummonerBoost.png', '14': '../static/spells/SummonerDot.png', '3': '../static/spells/SummonerExhaust.png', '4': '../static/spells/SummonerFlash.png', '6': '../static/spells/SummonerHaste.png', '7': '../static/spells/SummonerHeal.png', '13': '../static/spells/SummonerMana.png', '30': '../static/spells/SummonerPoroRecall.png', '31': '../static/spells/SummonerPoroThrow.png', '11': '../static/spells/SummonerSmite.png', '39': '../static/spells/SummonerSnowURFSnowball_Mark.png', '32': '../static/spells/SummonerSnowball.png', '12': '../static/spells/SummonerTeleport.png'}
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


def getTopFive(server,typeOfRank):
    start_time = time.time()
    lastN = 3
    champ_dict,item_dict,spell_dict = getdic()
    getdata  = getLeaderBoard(server,typeOfRank)


    usernameOne = getdata[0]['summonerName']
    usernameTwo = getdata[1]['summonerName']
    usernameThree = getdata[2]['summonerName']
    usernameFour = getdata[3]['summonerName']
    usernameFive = getdata[4]['summonerName']

    dfOne = lolDataGrabber(usernameOne,server,champ_dict,item_dict,spell_dict,lastN)
    dfTwo = lolDataGrabber(usernameTwo,server,champ_dict,item_dict,spell_dict,lastN)
    dfThree = lolDataGrabber(usernameThree,server,champ_dict,item_dict,spell_dict,lastN)
    dfFour = lolDataGrabber(usernameFour,server,champ_dict,item_dict,spell_dict,lastN)
    dfFive = lolDataGrabber(usernameFive,server,champ_dict,item_dict,spell_dict,lastN)
    return dfOne,dfTwo,dfThree,dfFour,dfFive

def getApi(inputforlate):
    api_key = 'RGAPI-e2cd6909-220a-4d26-8855-ae98746f30be'
    return api_key

def lolDataGrabber(username, my_region,champ_dict,item_dict,spell_dict,lastN):
    api_key = getApi("aa")
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
def requestsLog(url, status, headers):
    print(url)
    print(status)
    print(headers)


def getLeaderBoard(server,typeOfRank):
    api_key = getApi(server)
    url = "https://" + server + ".api.riotgames.com/lol/league/v4/challengerleagues/by-queue/" + typeOfRank + "?api_key="  + api_key
    print(url)
    response = urllib.request.urlopen(url)
    data = json.loads(response.read())

    return data['entries']


def main():
   data_flex =  getTopFive("na1","RANKED_SOLO_5x5")


if __name__ == "__main__":
    main()