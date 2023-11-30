import './OrderItem.scss'

const OrderItem = (props) => {

    const { item } = props;


    return <>
        <div className="order-item">
            <img className="order-image" src={item.image}></img>
            <div className='order-box'>
                <div className="order-info">
                    <span className="order-name">{item.name}</span>
                    <span className="order-price">
                        <span className='no-bold'>Price: $</span>{item.price.toFixed(2)}
                    </span>
                    <span className="order-quantity">
                        <span className='no-bold'>Quantity:</span> {item.quantity}
                    </span>
                </div>
                <span className="order-total-price">${(item.quantity * item.price).toFixed(2)}</span>
            </div>
        </div>
    </>
}

export default OrderItem