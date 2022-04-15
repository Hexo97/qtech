import React, { useEffect, useState } from 'react';
import { mainProducts } from './productsList';
import Product from './Product';
import { useLocation } from 'react-router-dom'
import '../App.css';

function ListHomePage() {
    const path = useLocation().pathname
    const [products, setProducts] = useState(mainProducts)

    useEffect(() => {
        path != '/products' && setProducts(products.filter(product => product.rating >= 4))
    }, []);

    return (
        <div className="home">
            {
                <div className="home__row">
                    {
                        products.map(item => {
                            return (
                                < Product
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        }
                        )
                    }
                </div>
            }
        </div>
    )
}

export default ListHomePage