"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#*****************************Usuarios**************************

@api.route('/user', methods=['GET'])
def handle_get_users():

    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users))

    if not all_users:
        return jsonify({'msg' : 'No hay usuarios registrados'}), 404

    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def handle_get_user(id):
    
    user = User.query.get(id)
    user = user.serialize()

    return jsonify(user), 200

@api.route('/user', methods=['POST'])
def handle_add_user():

    body = request.get_json()
    print(body)

    required_fields = ['username', 'email', 'password']

    for field in required_fields:
        if field not in body or not body[field].strip():
            return jsonify({'msg': f'Error: {field} no puede estar vacío'}), 400
    
    new_user = User();
    new_user.username= body["username"]
    new_user.name= body['name']
    new_user.lastname= body['lastname']
    new_user.email= body['email']
    new_user.password= body['password']

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 201

@api.route('/user/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user=User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return jsonify({'msg': 'Usuario elminado'}), 204