
from fastapi import FastAPI, Depends, Response, status
import schemas
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

models.Base.metadata.create_all(engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/user")
def create(request: schemas.Users, db: Session = Depends(get_db)):
    new_user = models.User(username=request.username,
                           email=request.email, 
                           password=request.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@app.get("/user")
def getAll(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users


@app.get("/user/{id}", status_code=200)
def getUserById(id, response: Response, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if not user:
        response.status_code=status.HTTP_404_NOT_FOUND
        return {'detail': f"User with the id {id} is not available"}
    return user
