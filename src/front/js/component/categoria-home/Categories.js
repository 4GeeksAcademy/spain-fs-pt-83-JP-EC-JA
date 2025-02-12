import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const electronics = ['https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg']
const jewelery = ['https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg']
const women =['https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg']
const men =['https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg']

export const Catergories = () => {

  return (
    <div className="py-5 text-center categoria">
      <div className="container-fluid">
        <h4 className="text-uppercase">Compra por Categoria</h4>
        <p className="py-4">Aquí podras ver nuestro catalogo más completo.. </p>

        <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4">

          <div className="col">
            <img src={electronics} />
            <h5 className="text-uppercase mt-5"><Link to='/electronics'className="btn btn-light px-5 border-0">electronics</Link></h5>

          </div>

          <div className="col">
            <img src={jewelery} />
            <h5 className="text-uppercase mt-5"><Link to='/jewelery'className="btn btn-light px-5 border-0">jewelery</Link></h5>

          </div>

          <div className="col">
            <img src={men} />
            <h5 className="text-uppercase mt-5"><Link to='/menclothes' className="btn btn-light px-5 border-0">men's clothing </Link></h5>
          </div>

          <div className="col">
            <img src={women} />
            <h5 className="text-uppercase mt-5"><Link to='/womanclothes' className="btn btn-light px-5 border-0">women's clothing</Link></h5>
          </div>
        </div>
      </div>

    </div>
  )
}