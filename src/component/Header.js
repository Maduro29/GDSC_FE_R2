import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/dinosaur.png'
import './Header.scss'
import Wishlist from './Wishlist';

const Header = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/')
    }

    return <>
        <div className="header">
            <button className="header-1" onClick={() => handleHome()}>
                <img src={Logo}></img>
                <span className='header-1-text'>Dinomerch</span>
            </button>
            <div className="header-2">
                <button className='header-cart header-2-des'>
                    <i className="fas fa-cart-shopping"></i>
                    <span className='header-cart-text'>Cart</span>
                </button>
                <button className='header-wishlist header-2-des'>
                    <i className="fas fa-heart"></i>
                    <span className='header-cart-text'>Wishlist</span>
                    <Wishlist />
                </button>
            </div>
        </div>
    </>
}

export default Header