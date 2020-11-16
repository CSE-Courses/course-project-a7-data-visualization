import unittest
import pandas as pd
from src.gamedata import loldata


class Testleague(unittest.TestCase):

    def test_dataFrame(self):
        username = "doublelift"
        region = "na1"
        x = loldata.getLolData(username, region)
        d = isinstance(x, pd.DataFrame)
        self.assertEqual(d,True,"Should be true")

    def test_dataFrame_One(self):
        username = "doublelift"
        region = "na1"
        usernameTwo = "doublelift"
        regionOne = "na1"
        x = loldata.getDataTwo(username,usernameTwo,region,regionOne)
        d = isinstance(x, pd.DataFrame)
        self.assertEqual(d,True,"Should be true")


if __name__ == '__main__':
    unittest.main()
