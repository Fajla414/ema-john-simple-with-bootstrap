import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, seller, shipping, id, stock } = props.product;
    return (
        <div>
            <div className="container product">
                <div className="row">
                    <div className="col-md-3">
                        <img src={img} className='img-fluid' alt={name} />
                    </div>
                    <div className="col-md-9">
                        <h4>{name}</h4>
                        <p>by: <small>{seller}</small></p>
                        <p>Price: ${price}</p>
                        <p>Stock {stock} left over</p>
                        <button onClick={() => props.handleAddProduct(props.product)} className='main-btn'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Product;