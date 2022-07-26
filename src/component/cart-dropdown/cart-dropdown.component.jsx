import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import CartItem from '../../cart-item/cart-item.component';

import { CartContext } from '../context/cart.context';

const CartDropDown = () => {

    const { cartItems }  = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
     
    return (
        <div className='cart-dropdown-container'>
            <div clasName='cart-items'>
                {cartItems.map( (item) => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;