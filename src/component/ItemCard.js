import './ItemCard.scss'

const ItemCard = (props) => {

    const { name, price, image } = props;
    console.log('check props: ', name, price, image)

    return <>
        <div className="item-card">
            <div className='box-img'>
                <img src={image}></img>
            </div>
            <div className='item-info'>
                <span>{name}</span>
                <div className='item-option'>
                    <span className='item-price'>${price.toFixed(2)}</span>
                    <button className='item-add-button'>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ItemCard