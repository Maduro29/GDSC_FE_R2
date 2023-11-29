import './CartItem.scss'

const CartItem = (props) => {

    const { item } = props;
    console.log('check props: ', item)

    return <>
        <div className="cart-item">
            <img className="cart-image" src={item.image}></img>
            <div className='cart-info'>
                <span className='cart-name'>{item.name}</span>
                <div className='cart-flex'>
                    <div className='cart-flex'>
                        <div className='cart-quantity-control'>
                            <i className='fas fa-minus'></i>
                            <span className='cart-quantity'>{item.quantity}</span>
                            <i className='fas fa-plus'></i>
                        </div>
                        <span className='cart-price'>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <i className='cart-delete fas fa-trash'></i>
                </div>
            </div>
        </div>
    </>
}

export default CartItem