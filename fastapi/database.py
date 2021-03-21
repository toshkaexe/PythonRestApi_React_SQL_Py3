import sqlite3

global db
global sql
db = sqlite3.connect('users.db')
sql = db.cursor()
sql.execute("""CREATE TABLE IF NOT EXISTS users(
    login TEXT,
    pass TEXT,
    email TEXT
)""")
db.commit()


def registation():
    user_login = input('Login: ')
    user_password = input('Password: ')
    email = input('Email: ')
    sql.execute(f"SELECT login FROM users WHERE login='{user_login}'")
    if sql.fetchone() is None:
        sql.execute(
            f"INSERT INTO users VALUES('{user_login}', '{user_password}', '{email}')")
        db.commit()
        print("registed")
    else:
        print("We had this record!")
    for value in sql.execute("SELECT * FROM users"):
        print(value)

registation()