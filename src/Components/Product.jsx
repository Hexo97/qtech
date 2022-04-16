import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Product({ ...product }) {

    const detailsPath = {
        pathname: `/ProductDetails/${product.id}`,
        product: product
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{product.title}</p>
                <p className="product__price">
                    <strong>${product.price}</strong>
                </p>
            </div>
            <img src={product.image} alt="" />
            <button style={{ padding: 10 }}>
                <Link to={detailsPath}>View Details</Link>
            </button>
        </div>
    );
}

export default Product;
