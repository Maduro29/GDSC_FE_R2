import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../app/wishlistSlice';
import { addToCart } from '../app/cartSlice';
import './ItemCard.scss'
import toast from 'react-hot-toast';

const ItemCard = (props) => {

    const { item } = props;
    console.log('check props: ', item)

    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const cart = useSelector(state => state.cart);
    const isWishlisted = wishlist.some(wishlistItem => wishlistItem._id === item._id);
    const isInCart = cart.some(cartItem => cartItem._id === item._id);

    const handleWishlistClick = () => {
        if (isWishlisted) {
            dispatch(removeFromWishlist(item));
            toast.error('Item removed from wishlist', {
                style: {
                    border: 'none',
                    padding: '15px 30px',
                    color: '#000',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginBottom: '20px'
                },
                iconTheme: {
                    primary: '#EF4344',
                    secondary: '#FFFAEE',
                },
                duration: 1000
            });
        } else {
            dispatch(addToWishlist(item));
            toast.success('Item added to wishlist', {
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
        <div className="item-card">
            <div className='box-img'>
                <img src={item.image} alt={item.name} />
                <i className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'} onClick={handleWishlistClick}></i>
            </div>
            <div className='item-info'>
                <span>{item.name}</span>
                <div className='item-option'>
                    <span className='item-price'>${item.price.toFixed(2)}</span>
                    <button className='item-add-button' onClick={handleAddToCartClick}>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
