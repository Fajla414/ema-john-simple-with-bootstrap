import React, { useState } from 'react';
import fackData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fackData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='mt-3 shop-container'>
            <div className="product-container">
                {product.map(prd => <Product product={prd} key={prd.id} handleAddProduct={handleAddProduct}></Product>)}
            </div>
            <div className="cart-container">
                { <Cart cart={cart}></Cart>}
            </div>

        </div>
    );
};

export default Shop;