import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../app/wishlistSlice';
import { addToCart } from '../app/cartSlice';
import './ItemCard.scss'

const ItemCard = (props) => {

    const { item } = props;
    console.log('check props: ', item)

    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const isWishlisted = wishlist.some(wishlistItem => wishlistItem._id === item._id);

    const handleWishlistClick = () => {
        if (isWishlisted) {
            dispatch(removeFromWishlist(item));
        } else {
            dispatch(addToWishlist(item));
        }
    }

    const handleAddToCartClick = () => {
        dispatch(addToCart(item));
        // console.log('cmn')
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
