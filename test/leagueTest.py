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



if __name__ == '__main__':
    unittest.main()
