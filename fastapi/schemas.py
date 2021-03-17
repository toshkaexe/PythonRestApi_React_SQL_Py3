from pydantic import BaseModel
from datetime import date


from pydantic.errors import DateError


class Book(BaseModel):
    title: str
    writer: str
    duration: str
    date: date
    summary: str
    genders: str = None
