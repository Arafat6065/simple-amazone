import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary In Cart</h2>
            <p>Selectem item:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{grandTotal}</p>
        </div>
    );
};

export default Cart;