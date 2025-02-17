from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=False)
    name = db.Column(db.String(32), nullable=True)
    lastname = db.Column(db.String(32), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    favorites = db.relationship("Favorite", back_populates="user",cascade="all, delete-orphan")
    cart = db.relationship("Cart", back_populates="user",cascade="all, delete-orphan")

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
            "username": self.username,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "favorites": [fav.serialize() for fav in self.favorites],
            "cart": [cart.serialize() for cart in self.cart]
        }

class Favorite (db.Model):
    __tablename__ = 'favorite'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    product_id = db.Column(db.Integer, nullable=False)
    user = db.relationship('User', back_populates="favorites", uselist=False, single_parent=True)

    def __repr__(self):
        return f'<Favorite {self.id}: {self.product_id} - user {self.user_id}>'

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id
        }
    
class Cart (db.Model):
    __tablename__ = 'Cart'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    product_id = db.Column(db.Integer, nullable=False)
    user = db.relationship('User', back_populates="cart", uselist=False, single_parent=True)
    
    def __repr__(self):
        return f'<Cart {self.id}: {self.product_id} - user {self.user_id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id
        }