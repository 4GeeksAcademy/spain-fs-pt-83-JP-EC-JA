import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";


export const shopAll = () => {
    return (
      <div className='all-products'>
        <Navbar/>
        <div className="card">
         <img src="..." className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="title">products</h5>
          <a href="#" className="btn btn-priary">More Info</a>
         </div>
        </div>
      </div>
    )
}