"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, unset_jwt_cookies
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User, Favorite
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import timedelta

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#*****************************Todos los Usuarios**************************

@api.route('/user', methods=['GET'])
def handle_get_users():

    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users))

    if not all_users:
        return jsonify({'msg' : 'No hay usuarios registrados'}), 404

    return jsonify(all_users), 200


#--------------------------------llamada de usuario por su respectivo ID------------------------
@api.route('/user/<int:id>', methods=['GET'])
def handle_get_user(id):
    
    user = User.query.get(id)
    if not user:
        return jsonify({'msg': 'Usuario no encontrado'}), 404
    return jsonify(user.serialize()), 200


#------------------Crear un usuario------------------------------------------------------

@api.route('/user', methods=['POST'])
def handle_add_user():

    body = request.get_json()
    print(body)

    required_fields = ['username', 'email', 'password']

    for field in required_fields:
        if field not in body or not body[field].strip():
            return jsonify({'msg': f'Error: {field} no puede estar vacío'}), 400
    
    if User.query.filter_by(username=body["username"]).first():
        return jsonify({'msg': 'Error: El username ya está en uso'}), 400
    
    if User.query.filter_by(email=body["email"]).first():
        return jsonify({'msg': 'Error: El email ya está en uso'}), 400
    
    hashed_password = generate_password_hash(body["password"], method="pbkdf2:sha256")
    
    new_user = User(
        username=body["username"],
        name=body.get("name"),
        lastname=body.get("lastname"),
        email=body["email"],
        password=hashed_password  # Guardamos la contraseña encriptada
    )
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'msg': 'Usuario creado exitosamente'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg': 'Error al crear usuario', 'error': str(e)}), 500
    

#--------------------------------Eliminar un usuario------------------------------

@api.route('/user/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user=User.query.get(id)
    if not user:
        return jsonify({'msg': 'Usuario no encontrado'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'msg': 'Usuario eliminado'}), 200


#----------------------------Login (compara la contraseña del usuario si es correcta)-----------------------------------------
@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'msg': 'Credenciales incorrectas'}), 401

    # Si la contraseña es correcta, generamos el token JWT
    access_token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))

    return jsonify({
        'msg': 'Inicio de sesión exitoso',
        'token': access_token,
        'user': user.serialize()
    }), 200

@api.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    response = jsonify({'msg': 'Cierre de sesión exitoso'})
    unset_jwt_cookies(response)  # Eliminar JWT del cliente
    return response, 200

#----------------FAVORITE---------------------
@api.route('/favorite/<int:id>', methods=['GET'])
def handle_get_favorite(id):
    
    favorite = Favorite.query.get(id)
    if not favorite:
        return jsonify({'msg': 'Favorito no encontrado'}), 404
    return jsonify(favorite.serialize()), 200