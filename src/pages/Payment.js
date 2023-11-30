import './Payment.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import OrderItem from '../component/OrderItem';
import FlexLine from '../component/FlexLine';
import { useEffect, useState } from 'react';
import Modal from '../component/Modal';

const Payment = () => {

    const cart = useSelector(state => state.cart);

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const shipmentCost = 6.5;
    const taxCollected = 0.8;
    const orderTotalPrice = (total + shipmentCost + taxCollected);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState(0);
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    useEffect(() => {
        setNumberOfItems(cart.length);
        setOrderTotal(orderTotalPrice);
    }, [cart]);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleCardNameChange = (event) => {
        setCardName(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleExpDateChange = (event) => {
        setExpDate(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const showModal = () => {
        // setModalData();
        setShow(true);
    }

    const hideModal = () => {
        setShow(false);
    }

    const handleConfirm = (e) => {
        e.preventDefault();

        const stateObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            cardName: cardName,
            cardNumber: cardNumber,
            expDate: expDate,
            cvv: cvv,
            numberOfItems: numberOfItems,
            orderTotal: orderTotal
        };

        fetch('https://dinomerch.onrender.com/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stateObject)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message && data.message.startsWith('E11000 duplicate')) {
                    // Show the modal with the data
                    setTransactionDate(new Date());
                    showModal();
                }
            })
            .catch(error => console.error('Error:', error));
    }

    const [transactionDate, setTransactionDate] = useState(null);

    return (
        <>
            <div className="payment">
                <div className='payment-back'>
                    <button className='back-home' onClick={() => handleBack()}>
                        <i className='fas fa-arrow-left'></i>
                        <span className='back-text'>Back to home page</span>
                    </button>
                </div>
                <form onSubmit={(e) => handleConfirm(e)}>
                    <div className='payment-detail row'>
                        <div className='payment-personal col'>
                            <span className='payment-text-1'>Shipping Address</span>
                            <div className='row'>
                                <div className='col'>
                                    <label>First Name</label>
                                    <input tpye='text' name='firstName' onChange={(e) => handleFirstNameChange(e)}></input>
                                </div>
                                <div className='col'>
                                    <label>Last Name</label>
                                    <input tpye='text' name='lastName' onChange={(e) => handleLastNameChange(e)}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Phone Number</label>
                                    <input type='number' name='phone' onChange={(e) => handlePhoneChange(e)}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Address</label>
                                    <input type='text' name='address' onChange={(e) => handleAddressChange(e)}></input>
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
                                    <input type='text' name='cardName' onChange={(e) => handleCardNameChange(e)}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Card Number</label>
                                    <input type='number' name='cardNumber' onChange={(e) => handleCardNumberChange(e)}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label>Expiration Date</label>
                                    <input tpye='text' name='expDate' onChange={(e) => handleExpDateChange(e)}></input>
                                </div>
                                <div className='col'>
                                    <label>CVV</label>
                                    <input tpye='number' name='cvv' onChange={(e) => handleCvvChange(e)}></input>
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
                                <FlexLine text={'Order total:'} number={orderTotalPrice} />
                                <input type='submit' value='Confirm order' className='payment-submit'></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {show && <Modal closeModal={hideModal} grandTotal={total} transactionDate={transactionDate} shipmentCost={shipmentCost} taxCollected={taxCollected} />}
        </>
    )
}

export default Payment