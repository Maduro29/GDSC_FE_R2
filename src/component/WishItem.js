import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/cartSlice';
import './WishItem.scss'
import toast from 'react-hot-toast';

const WishItem = (props) => {

    const { item } = props;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart); // Get the current state of the cart
    const isInCart = (cart.length ? cart.some(cartItem => cartItem._id === item._id) : []) // Check if the item is already in the cart

    const handleAddToCartClick = () => {
        if (isInCart) {
            toast.error('There\'s an error while adding item to cart', {
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
                    primary: '#EF4344',
                    secondary: '#FFFAEE',
                },
                duration: 1000
            });
        } else {
            dispatch(addToCart(item));
            toast.success('Item successfully added to cart', {
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
    }

    return (
        <div className="wish-item">
            <img className="wish-image" src={item.image} alt={item.name} />
            <div className='wish-info'>
                <span className='wish-name'>{item.name}</span>
                <span className='wish-price'>${item.price.toFixed(2)}</span>
                <button className='wish-add-to-cart' onClick={handleAddToCartClick}>Add to cart</button>
            </div>
        </div>
    );
}

export default WishItem;
