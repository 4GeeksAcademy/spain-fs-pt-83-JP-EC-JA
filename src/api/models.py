from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=True)
    name = db.Column(db.String(32), unique=False, nullable=False)
    lastname = db.Column(db.String(32), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    #Estable una relacion con la tabla password
    

    def __repr__(self):
        return f'<User {self.id, self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
