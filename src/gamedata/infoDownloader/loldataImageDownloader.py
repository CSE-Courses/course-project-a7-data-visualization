# global variables
import ast
import os
import urllib
from PIL import Image
import pandas as pd
from riotwatcher import LolWatcher
import cv2
import json
from urllib.request import Request, urlopen
import  numpy as np

def url_to_image(name,ofType):
        toadd =  'http://ddragon.leagueoflegends.com/cdn/10.24.1/img/'
        url = (toadd + ofType + "/" + name)
        print()
        resp = urllib.request.urlopen(url)
        image = np.asarray(bytearray(resp.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        # return the image
        return image

def imagegetter(input,ofType):

       # reading the data from the file
    with open(input) as f:
        data = f.read()

    # reconstructing the data as a dictionary
    d = ast.literal_eval(data)
    for key in d:
       if (ofType == 'item'):
            name =  key + str(".png")
       elif(ofType == 'spell'):
            name = str(d[key])
            name = name[17:]
       else:
            raw_name =  str(d[key][0])
            Spname = raw_name.split("/")
            name = Spname[0]

       try:
           image = url_to_image(name,ofType)
           cv2.imwrite(os.path.join(name), image)
           print(str("happy because " + name))
       except:
           print(str("sad because " + name))

def main():
    imagegetter('spell.txt','spell')


if __name__ == "__main__":
    main()