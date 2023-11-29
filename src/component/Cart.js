import { useSelector } from 'react-redux';
import './Cart.scss'
import CartItem from './CartItem';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log('check cart: ', cart)

    return (
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
        </div>
    );
}

export default Cart;
