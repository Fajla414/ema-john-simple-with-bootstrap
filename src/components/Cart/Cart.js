import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let price = 0;
    for (let a = 0; a < cart.length; a++) {
        const element = cart[a];
        price = price + element.price;
    }
    let shipping = 0;
    if (price > 35) {
        shipping = 0;
    }
    else if (price > 15) {
        shipping = 4.99;
    }
    else if (price > 5) {
        shipping = 12.99;
    }
    const tax = price / 10;
    const grandTotal = price + shipping + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <div className="container mb-4">
                <h4>Ordered Summary: {cart.length}</h4>
                <p>Price: {formatNumber(price)}</p>
                <p>Shipping: {formatNumber(shipping)}</p>
                <p>Tax + VAT: {formatNumber(tax)}</p>
                <p>Total: {formatNumber(grandTotal)}</p>
                <button className='main-btn'><FontAwesomeIcon icon={faArrowRight}/> Check Out</button>
            </div>
        </div>
    );
};

export default Cart;