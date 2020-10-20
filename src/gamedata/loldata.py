# global variables
import pandas as pd
from riotwatcher import LolWatcher


def getLolData(username, my_region):
    api_key = 'RGAPI-01b2711e-c89e-4473-971d-194af2794ca9'
    watcher = LolWatcher(api_key)
    me = watcher.summoner.by_name(my_region, username)
    my_matches = watcher.match.matchlist_by_account(my_region, me['accountId'])
    # check league's latest version
    latest = watcher.data_dragon.versions_for_region(my_region)['n']['champion']
    # Lets get some champions static information
    static_champ_list = watcher.data_dragon.champions(latest, False, 'en_US')
    # champ static list data to dict for looking up
    static_item_list = watcher.data_dragon.items(latest)
    static_spell_list = watcher.data_dragon.summoner_spells(latest)
    champ_dict = {}
    item_dict = {}
    spell_dict = {}
    for key in static_champ_list['data']:
        row = static_champ_list['data'][key]
        champ_dict[row['key']] = row['id']
    for key in static_item_list['data']:
        row = static_item_list['data'][key]
        item_dict[key] = row["name"]
    for key in static_spell_list['data']:
        row = static_spell_list['data'][key]
        spell_dict[key] = row["name"]
    last_five_match = {}
    for row in my_matches['matches'][:5]:
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
                participants_row['champion'] = row['championId']
                participants_row['championName'] = champ_dict[str(row['championId'])]
                participants_row['spell1'] = row['spell1Id']
                participants_row['spell2'] = row['spell2Id']
                participants_row['win'] = row['stats']['win']
                participants_row['kills'] = row['stats']['kills']
                participants_row['deaths'] = row['stats']['deaths']
                participants_row['assists'] = row['stats']['assists']
                participants_row['totalDamageDealt'] = row['stats']['totalDamageDealt']
                participants_row['goldEarned'] = row['stats']['goldEarned']
                participants_row['champLevel'] = row['stats']['champLevel']
                participants_row['totalMinionsKilled'] = row['stats']['totalMinionsKilled']
                participants_row['item0'] = row['stats']['item0']
                participants_row['item1'] = row['stats']['item1']
                players.append(participants_row)
    print(players)
    df = pd.DataFrame(players)
    return df


def main():
    print(getLolData("doublelift", "na1"))


if __name__ == "__main__":
    main()