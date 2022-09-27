import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary In Cart</h2>
            <p>Selectem item:{props.cart.length}</p>
        </div>
    );
};

export default Cart;