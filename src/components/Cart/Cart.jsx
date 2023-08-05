/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>please add some products</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p>Thanks for giving money</p>
        </div>

    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}> Order Summary {cart.length} </h2>
            <p className={`bold yellow ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ?
                <span className='purple'>Aro kino</span>
                : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>
                        X</button>
                </p>)
            }
{/* if the condition is true next thing will displayed */}
            {
                cart.length === 2 && <p> Double hatrick!!</p>
            }
            {/* if the condition is false next thing will displayed */}
            {
                cart.length === 3 || <h3> tinta to  hoilo na</h3>
            }
        </div>
    );
};

export default Cart;