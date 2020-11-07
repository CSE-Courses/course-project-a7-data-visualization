# global variables
import ast
import os
import urllib

import pandas as pd
from riotwatcher import LolWatcher
import cv2
import json
from urllib.request import Request, urlopen
import  numpy as np

def url_to_image(url):
        # download the image, convert it to a NumPy array, and then read
        # it into OpenCV format
        resp = urllib.request.urlopen(url)
        image = np.asarray(bytearray(resp.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        # return the image
        return image

def getLolData(username, my_region):

       # reading the data from the file
    with open('../infofiles/item.txt') as f:
        data = f.read()

    print("Data type before reconstruction : ", type(data))

    # reconstructing the data as a dictionary
    d = ast.literal_eval(data)
    print("Data type after reconstruction : ", type(d))
    for key in d:
       print(d[key])
       try:
           image = url_to_image(d[key])
           name = str(key) + ".png"
           print(name)
           cv2.imwrite(os.path.join(name), image)
       except:
           print("sad")

def main():
    print(getLolData("doublelift", "na1"))


if __name__ == "__main__":
    main()