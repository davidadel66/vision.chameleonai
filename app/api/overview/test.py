from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import os
from backend.services.stocks import StockGlobal

print(os.getcwd())
app = FastAPI()

@app.get("/hello_world")
def read_root():
    return {"Hello": "World"}


@app.get("/overview/{ticker}/daily_historical/{start}/{end}")
async def getDailyHistorical(ticker: str, start: str, end: str): 
    stockGlobal = StockGlobal(ticker)
    return stockGlobal.historicalBar(start, end)



