import sqlite3

global db
global sql
db = sqlite3.connect('users.db')
sql = db.cursor()
sql.execute("""CREATE TABLE IF NOT EXISTS users(
    username TEXT,
    login TEXT,
    pass TEXT,    
    email TEXT    
)""")
db.commit()


def registation():
    user_name = input('UserName: ')
    user_login = input('Login: ')
    user_password = input('Password: ')
    user_email = input('Email: ')
    
    if sql.fetchone() is None:
        sql.execute(
            f"INSERT INTO users VALUES('{user_name}','{user_login}', '{user_password}', '{user_email}')")
        db.commit()
        print("registed")
    else:
        print("We had this record!")
    for value in sql.execute("SELECT * FROM users"):
        print(value)



def getUserNameByLogin(sql, login):
    #login = input('Enter log: ')
    for value in sql.execute(f"SELECT username FROM users WHERE login='{login}'"):
        print(value)

#registation()
userLogin = input('userLogin: ')
getUserNameByLogin(sql, userLogin)

