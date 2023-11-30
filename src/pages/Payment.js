import './Payment.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import OrderItem from '../component/OrderItem';
import FlexLine from '../component/FlexLine';

const Payment = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    const cart = useSelector(state => state.cart);
    console.log(cart, 'check cart payment');

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const shipmentCost = 6.5;
    const taxCollected = 0.8;
    const orderTotal = (total + shipmentCost + taxCollected);

    return (
        <>
            <div className="payment">
                <div className='payment-back'>
                    <button className='back-home' onClick={() => handleBack()}>
                        <i className='fas fa-arrow-left'></i>
                        <span className='back-text'>Back to home page</span>
                    </button>
                </div>
                <form>
                    <div className='payment-detail row'>
                        <div className='payment-personal col'>
                            <span className='payment-text-1'>Shipping Address</span>
                            <div className='row'>
                                <div className='col'>
                                    <label>First Name</label>
                                    <input tpye='text'></input>
                                </div>
                                <div className='col'>
                                    <label>Last Name</label>
                                    <input tpye='text'></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Phone Number</label>
                                    <input type='text'></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Address</label>
                                    <input type='text'></input>
                                </div>
                            </div>
                        </div>
                        <div className='payment-card col'>
                            <span className='payment-text-1'>Payment Details</span>
                            <button className='payment-choice' onClick={(e) => { e.preventDefault() }}>
                                <i className='fa-regular fa-credit-card'></i>
                                Visa/Mastercard
                            </button>
                            <div className='row'>
                                <div className='col'>
                                    <label>Cardholder Name</label>
                                    <input type='text'></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Card Number</label>
                                    <input type='text'></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Expiration Date</label>
                                    <input tpye='text'></input>
                                </div>
                                <div className='col'>
                                    <label>CVV</label>
                                    <input tpye='text'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment-order'>
                        <div className='order-detail'>
                            <span>Order Details</span>
                            {cart.map(item => <OrderItem item={item} />)}
                        </div>
                        <div className='order-summary'>
                            <span>Order Summary</span>
                            <div className='order-bg-grey'>
                                <div className='order-component'>
                                    <FlexLine text={'Items (' + cart.length + '):'} number={total} />
                                    <FlexLine text={'Shipment Cost:'} number={shipmentCost} />
                                    <FlexLine text={'Tax Collected:'} number={taxCollected} />
                                </div>
                                <div className='break-line'></div>
                                <FlexLine text={'Order total:'} number={orderTotal} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Payment