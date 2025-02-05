"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User, Favorite
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#=================== Todos los usuarios ==============================

@api.route('/user', methods=['GET'])

def handle_get_users():

    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users))

    if not all_users:
        return jsonify({'msg' : 'No hay usuarios registrados'}), 404

    return jsonify(all_users), 200

#=================== encuentra el usuario por su ID ==================

@api.route('/user/<int:id>', methods=['GET'])
def handle_get_user(id):
    
    user = User.query.get(id)
    if not user:
        return jsonify({'msg': 'Usuario no encontrado'}), 404
    return jsonify(user.serialize()), 200

#===================  Crear un usuario  ==============================

@api.route('/user', methods=['POST'])
def handler_create_user():
    
    body = request.get_json()
    print(body)

    required_fields = ['email', 'password']

    for field in required_fields:
        if field not in body or not body[field].strip():
            return jsonify({'msg': f'Error {field} no puede estar vacío'}), 400

    if User.query.filter_by(email=body["email"]).first():
        return jsonify({'msg': 'Error: El email ya está en uso'}), 400

    new_user = User(email=body["email"])
    new_user.set_password(body["password"])

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
    if not user:
        return jsonify({'msg': 'Error: Usuario no encontrado'}), 404

    if not user.check_password(body['password']):
        return jsonify({'msg': 'Error: Contraseña incorrecta'}), 401
    
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