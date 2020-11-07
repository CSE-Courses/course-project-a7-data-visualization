# global variables
import csv
import os

import pandas as pd
from riotwatcher import LolWatcher


def getLolData(username, my_region):
    api_key = 'RGAPI-239197cf-11a3-41d1-9afb-03c6e4d972d5'
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


    for valueOne in static_champ_list['data']:
        row = static_champ_list['data'][valueOne]
        key = row["key"]
        name = row["name"]
        image =  str( "../static/" + "Champions/" + name + ".jpg")
        value = image
        champ_dict[key] = value


    for key in static_item_list['data']:
        image = str( "../static/" + "item/" + str(key) + ".png")
        item_dict[key] = image

    for id in static_spell_list['data']:
        row = static_spell_list['data'][id]
        image = str("../static/spells/" + "Summoner"+ str(row["name"]) + ".png")
        spell_dict[row["key"]] = image


    NameChamp = 'champ.txt'
    savechamp = open(NameChamp, 'wt')
    savechamp.write(str(champ_dict))
    savechamp.close()

    NameSpell = 'spell.txt'
    savechamp = open(NameSpell, 'wt')
    savechamp.write(str(spell_dict))
    savechamp.close()

    NameItem = 'item.txt'
    savechamp = open(NameItem, 'wt')
    savechamp.write(str(item_dict))
    savechamp.close()



def main():
    print(getLolData("doublelift", "na1"))


if __name__ == "__main__":
    main()