import { useSelector } from 'react-redux';
import './Cart.scss'
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log('check cart: ', cart)

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/payment')
    }

    return (
        <>
            <div className="cart">
                {cart.length > 0 ? (
                    <>
                        {cart.map(item => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                {total > 0 ? <>
                    <div className='cart-payment'>
                        <span className='cart-total'>Total: ${total}</span>
                        <button className='cart-checkout' onClick={() => handleCheckout()}>Checkout</button>
                    </div></> : ''}
            </div>
        </>
    );
}

export default Cart;
