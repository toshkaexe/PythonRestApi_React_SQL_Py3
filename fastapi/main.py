from fastapi import FastAPI
from schemas import Book

app = FastAPI()
db =[]


@app.get("/")
def home():
    return {"Hello": "World"}

@app.get("/{pk}")
def get_item(pk: int, q: float = None):
    return{"key": pk, "q":  q}


@app.get("/user/{pk}/items/{items}/")
def get_user_items(pk: int, items: str):
    return{"user": pk, "items":  items}

@app.post('/book')
def create_book(item: Book):
    return item
#@app.get("/cities/{city_id}")
#@app.post("/cities")
#@app.delete("/cities")


