import './WishItem.scss'

const WishItem = (props) => {

    const { item } = props;

    return <>
        <div className="wish-item">
            <img className="wish-image" src={item.image}></img>
            <div className='wish-info'>
                <span className='wish-name'>{item.name}</span>
                <span className='wish-price'>${item.price.toFixed(2)}</span>
                <button className='wish-add-to-cart'>Add to cart</button>
            </div>
        </div>
    </>
}

export default WishItem