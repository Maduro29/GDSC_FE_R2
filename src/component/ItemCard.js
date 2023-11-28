import './ItemCard.scss'

const ItemCard = (props) => {

    const { item } = props;
    console.log('check props: ', item)

    return <>
        <div className="item-card">
            <div className='box-img'>
                <img src={item.image}></img>
            </div>
            <div className='item-info'>
                <span>{item.name}</span>
                <div className='item-option'>
                    <span className='item-price'>${item.price.toFixed(2)}</span>
                    <button className='item-add-button'>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ItemCard