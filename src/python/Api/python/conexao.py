import pymysql

db_config = {
    "host": "localhost",
    "user": "gabriel",
    "password": "senha",
    "database": "banco"
}

def get_connection():
    return pymysql.connect(**db_config)
