import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../app/cartSlice';
import './CartItem.scss'
import toast from 'react-hot-toast';

const CartItem = (props) => {

    const { item } = props;

    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        dispatch(removeFromCart(item));
        toast.success('Item removed from cart', {
            style: {
                border: 'none',
                padding: '15px 30px',
                color: '#000',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                fontSize: '18px',
                fontWeight: '500',
                marginBottom: '20px',
            },
            iconTheme: {
                primary: '#61C652',
                secondary: '#FFFAEE',
            },
            duration: 1000
        });
    }

    const handleIncreaseQuantityClick = () => {
        dispatch(increaseQuantity(item));
    }

    const handleDecreaseQuantityClick = () => {
        dispatch(decreaseQuantity(item));
    }

    return (
        <div className="cart-item">
            <img className="cart-image" src={item.image} alt={item.name} />
            <div className='cart-info'>
                <span className='cart-name'>{item.name}</span>
                <div className='cart-flex'>
                    <div className='cart-flex'>
                        <div className='cart-quantity-control'>
                            <i className='fas fa-minus' onClick={handleDecreaseQuantityClick}></i>
                            <span className='cart-quantity'>{item.quantity}</span>
                            <i className='fas fa-plus' onClick={handleIncreaseQuantityClick}></i>
                        </div>
                        <div className='cart-flex'>
                            <span className='cart-price'>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                    <i className='cart-delete fas fa-trash' onClick={handleRemoveClick}></i>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
