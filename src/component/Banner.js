import Logo from '../assets/images/dino.png'
import './Banner.scss'

const Banner = () => {

    const handleScroll = () => {
        window.scroll({
            top: 650,
            behavior: 'smooth'
        });
    }

    return <>
        <div className="banner">
            <div className='banner-container'>
                <div className="banner-left">
                    <span className='banner-title'>Shop the Look: dinomerch <br></br> - Define Your Style</span>
                    <span>Elevate Your Wardrobe with <br></br> Exclusive merch</span>
                    <button className="scroll-down" onClick={() => handleScroll()}><span>Scroll down for more</span>
                        <i className='fas fa-arrow-down'></i></button>
                </div>
                <div className="banner-right">
                    <img src={Logo}></img>
                </div>
            </div>
        </div>
    </>
}

export default Banner;