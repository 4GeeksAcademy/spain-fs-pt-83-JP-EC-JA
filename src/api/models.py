from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=False)
    name = db.Column(db.String(32), unique=False, nullable=True)
    lastname = db.Column(db.String(32), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)