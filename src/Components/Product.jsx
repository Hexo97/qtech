import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Product({ ...product }) {

    return (
        <div className="product">
            <div className="product__info">
                <p>{product.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
                
            </div>
            <img src={product.image} alt="" />
            <button>
            <Link to="ProductDetails">Click to view details </Link>

            </button>
        </div>
    )
}

export default Product
