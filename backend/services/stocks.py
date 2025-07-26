from backend.models.types import Adjustment, Timeframe
from dotenv import load_dotenv
import os 
import requests

load_dotenv()

class StockGlobal:
    def __init__(self, ticker):
        self.ticker = ticker
        self.url = "https://data.alpaca.markets/v2/stocks"
        self.adjustment = Adjustment.RAW
        self.limit = 1000
        self.timeframe = Timeframe('1Day')
        self.feed = 'sip'
        self.sort = 'desc'
        self.headers = {
            "accept": "application/json",
            "APCA-API-KEY-ID": os.getenv("ALPACA_KEY_ID"),
            "APCA-API-SECRET-KEY": os.getenv("ALPACA_SECRET_KEY")
        }


    def historicalBar(self, startDate: str, endDate: str): #YYYY-MM-DD
        fullHistoricalBars = []
        start = startDate + 'T00%3A00%3A00Z'
        end = endDate + 'T00%3A00%3A00Z'

        url = (f"{self.url}/{self.ticker}/bars?timeframe={self.timeframe.value}"
        f"&start={start}"
        f"&end={end}"
        f"&limit={self.limit}"
        f"&adjustment={self.adjustment.value}"
        f"&feed={self.feed}"
        f"&sort={self.sort}")

        next = None
        response: requests.Response = requests.get(url, headers=self.headers)
     
        bars: dict = response.json()
        fullHistoricalBars.append(bars)

        if bars['next_page_token']:
            while bars['next_page_token']:
                next = bars['next_page_token']
                response = requests.get((url + f'&page_token={next}'), headers=self.headers)
                bars = response.json()
                fullHistoricalBars.append(bars)


        return fullHistoricalBars


# if __name__ == "__main__":
#     stocks = StockGlobal('AAPL')
#     bars = stocks.historicalBar('2016-01-01', '2025-01-01')
#     print(bars)