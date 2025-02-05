from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    def set_password(self, password):
        """Genera un hash de la contraseña y la guarda"""
        self.password = generate_password_hash(password)

    def check_password(self, password):
        """Verifica si la contraseña ingresada es correcta"""
        return check_password_hash(self.password, password)
     

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }
    

    

class Favorite (db.Model):
    __tablename__ = 'favorite'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    user = db.relationship('User', backref=db.backref('favorites', lazy=True, cascade="all, delete"))

    def __repr__(self):
        return f'<Favorite {self.id} - user {self.user_id}>'

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id
        }
