from enum import Enum
import re

class Adjustment(Enum):
    RAW = 'raw'
    SPLIT = 'split'
    DIVIDEND = 'dividend'
    ALL = 'ALL'


class Timeframe:
    def __init__(self, value: str):
        if not self.is_valid(value):
            raise ValueError(f"Invalid timeframe: {value}. Must match Alpaca patterns (e.g., '5Min', '1D', '3M').")
        self.value = value

    @staticmethod
    def is_valid(value: str) -> bool:
        match = re.match(r"^(\d{1,2})(Min|T|Hour|H|Day|D|Week|W|Month|M)$", value)
        if not match:
            return False
        num, unit = int(match.group(1)), match.group(2)
        if unit in ("Min", "T") and not (1 <= num <= 59):
            return False
        if unit in ("Hour", "H") and not (1 <= num <= 23):
            return False
        if unit in ("Day", "D", "Week", "W") and num != 1:
            return False
        if unit in ("Month", "M") and num not in (1, 2, 3, 4, 6, 12):
            return False
        return True
    