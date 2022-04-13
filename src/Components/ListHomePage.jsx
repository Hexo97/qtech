import React from 'react';
import '../App.css';
import Product from './Product';
import { products } from './productsList';

function ListHomePage() {
    return (
        <div className="home">
            {/* <img className="home__image" src={bannerImg} alt="" /> */}

            {/*product id, title, price, rating */}

            <div className="home__row">
                {products.map(item => {
                    return (
                        <Product
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    )
                })}

            </div>

        </div>

    )
}

export default ListHomePage