"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User, Favorite, Cart
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#=================== Todos los usuarios ==============================

@api.route('/user', methods=['GET'])
@jwt_required()
def handle_get_users():

    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    if not user:
        return jsonify({'msg' : 'No hay usuarios registrados'}), 404

    return jsonify(user.serialize()), 200


#===================  Crear un usuario  ==============================


@api.route('/user', methods=['POST'])
def handler_create_user():
    
    body = request.get_json()
    print(body)

    required_fields = ['username', 'email', 'password']

    for field in required_fields:
        if field not in body or not body[field].strip():
            return jsonify({'msg': f'Error {field} no puede estar vacío'}), 400

    if User.query.filter_by(email=body["email"]).first():
        return jsonify({'msg': 'Error: El email ya está en uso'}), 400
    
    if User.query.filter_by(username=body["username"]).first():
        return jsonify({'msg': 'Error: El username ya está en uso'}), 400

    new_user = User(
    username=body["username"],
    name=body.get("name", ""), 
    lastname=body.get("lastname", ""),
    email=body["email"]
)
    new_user.set_password(body["password"])
    if len(body['password']) < 8:
        return jsonify({"error": "La contraseña debe tener más de 8 caracteres."}), 400


    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'msg': 'Usuario creado exitosamente'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al crear usuario', 'error': str(e)}), 500

#================================= crear token =================================

@api.route('/auth', methods=['POST'])
def handler_auth():
    body = request.get_json()

    if not body or 'email' not in body or 'password' not in body:
        return jsonify({'msg': 'Error: Faltan datos'}), 400
    
    user = User.query.filter_by(email=body['email']).first()
    if not user or not user.check_password(body['password']):
        return jsonify({'msg': 'Error: Usuario o contraseña incorrectos'}), 401
    
    token = create_access_token(identity=user.email)

    return jsonify({'msg': 'Inicio de sesión exitoso', 'token': token, 'user_id': user.id}), 200

#=============================== ELiminar un usuario ======================

@api.route('/user/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user=User.query.get(id)
    if not user:
        return jsonify({'msg': 'Usuario no encontrado'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'msg': 'Usuario eliminado'}), 200

#========================== encontrar favorito por id ==========================0

@api.route('/favorite/<int:id>', methods=['GET'])
def handle_get_favorite(id):
    favorite = Favorite.query.get(id)
    if not favorite:
        return jsonify({'msg': 'Favorito no encontrado'}), 404
    return jsonify(favorite.serialize()), 200

#------------------Crear un Favorito------------------------------------------------------
@api.route('/favorite', methods=['POST'])
@jwt_required()
def handle_add_favorite():

    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()
    if user is None:
        return jsonify({'msg': 'User not auth'}), 401
    body = request.get_json()
    print(body)
    
    if "product_id" not in body:
        return jsonify({'msg': f'Error: product_id no puede estar vacío'}), 400    

    favorite = Favorite(
        product_id = body["product_id"],
        user_id = user.id
    )

    try:
        db.session.add(favorite)
        db.session.commit()
        return jsonify({'msg': 'Favorito creado exitosamente'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al agregar el favorito', 'error': str(e)}), 500
    
#=================== eliminar favorito =============================
@api.route('/favorite/<int:product_id>', methods=['DELETE'])
@jwt_required()
def handle_delete_favorite(product_id):
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()
    if not user:
        return jsonify({'msg': 'User not authenticated'}), 401
    favorite = Favorite.query.filter_by(product_id=product_id, user_id=user.id).first()
    if not favorite:
        return jsonify({'msg': 'Favorite not found'}), 404
    try:
        db.session.delete(favorite)
        db.session.commit()
        return jsonify({'msg': 'Favorito eliminado exitosamente'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al eliminar el favorito', 'error': str(e)}), 500
    
#======================== encontrar producto en el carrito por id ==========================0

@api.route('/cart/<int:id>', methods=['GET'])
def handle_get_cart(id):
    cart = Cart.query.get(id)
    if not cart:
        return jsonify({'msg': 'Producto en el carrito no encontrado'}), 404
    return jsonify(cart.serialize()), 200
    
#----------------------------Crear Cart ---------------------------

@api.route('/cart', methods=['POST'])
@jwt_required()
def handle_add_cart():

    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()
    if user is None:
        return jsonify({'msg': 'User not auth'}), 401
    body = request.get_json()
    print(body)
    
    if "product_id" not in body:
        return jsonify({'msg': f'Error: product_id no puede estar vacío'}), 400    

    cart = Cart(
        product_id = body["product_id"],
        user_id = user.id
    )

    try:
        db.session.add(cart)
        db.session.commit()
        return jsonify({'msg': 'Carrito creado exitosamente'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al agregar producto al Carrito', 'error': str(e)}), 500
    
#==================== eliminar carrito =============================

@api.route('/cart/<int:product_id>', methods=['DELETE'])
@jwt_required()
def handle_delete_cart(product_id):

    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()
    if not user:
        return jsonify({'msg': 'User not authenticated'}), 401
    cart = Cart.query.filter_by(product_id=product_id, user_id=user.id).first()
    if not cart:
        return jsonify({'msg': 'product in cart not found'}), 404
    try:
        db.session.delete(cart)
        db.session.commit()
        return jsonify({'msg': 'Carrito eliminado exitosamente'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al eliminar el producto del carrito', 'error': str(e)}), 500