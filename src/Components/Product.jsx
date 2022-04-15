import React from "react";
import "../App.css";
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
            <button style={{ padding: 10 }}>
                <Link to="/ProductDetails">View Details</Link>
            </button>
        </div>
    );
}

export default Product;
