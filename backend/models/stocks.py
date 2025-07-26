from pydantic import BaseModel, Field
from datetime import datetime
from typing import List, Optional


class Bar(BaseModel): 
    close: float = Field(alias='c', description='Close price at the end of the historical bar time period')
    high: float = Field(alias='h', description='Highest price point within the historical bar time period')
    low: float = Field(alias='l', description='Lowest price point within the historical bar time period')
    count: int = Field(alias='n', description='Number of trades places within the historical bar time period')
    volume: int = Field(alias='v', description='Volume of shares traded within the historical bar time period')
    weighted_volume: float = Field(alias='vw', description='Weighted Volume traded within the historical bar time period')
    open: float = Field(alias='o', description='Price at open at the start of the historical bar time period')
    timestamp: datetime = Field(alias='t', description='Time of the beginning start of the historical bar time period')



class HistoricalBars(BaseModel):
    bars: List[Bar] = Field(description='List of historical bars')
    next: Optional[str] = Field(alias='next_page_token', description='String for next page token continuing records')
    symbol: str



