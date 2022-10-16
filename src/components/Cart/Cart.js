import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const taxString = (total * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;