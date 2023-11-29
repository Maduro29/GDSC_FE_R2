import { useSelector } from 'react-redux';
import './Wishlist.scss'
import WishItem from './WishItem';

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist);

    return (
        <div className="wishlist">
            {wishlist.length > 0 ? (
                <>
                    {wishlist.map(item => (
                        <WishItem item={item} />
                    ))}
                </>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
}

export default Wishlist;
