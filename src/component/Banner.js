import Logo from '../assets/images/dino.png'
import './Banner.scss'

const Banner = () => {
    return <>
        <div className="banner">
            <div className='banner-container'>
                <div className="banner-left">
                    <h1>Shop the Look: dinomerch <br></br> - Define Your Style</h1>
                    <span>Elevate Your Wardrobe with <br></br> Exclusive merch</span>
                    <div className="scroll-down">Scroll down for more
                        <i className='fas fa-arrow-down'></i></div>
                </div>
                <div className="banner-right">
                    <img src={Logo}></img>
                </div>
            </div>
        </div>
    </>
}

export default Banner;