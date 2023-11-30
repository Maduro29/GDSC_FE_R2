import FlexLine from './FlexLine';
import './Modal.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../app/cartSlice';

function Modal(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    console.log(props)

    const handleContinue = (e) => {
        e.preventDefault()
        dispatch(clearCart());
        props.closeModal()
        navigate('/')
    }

    return (
        <div className="modal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bottom">
                        <i className="fa-regular fa-circle-check"></i>
                        <span className='modal-bold modal-thank'>Thanks for your order!</span>
                        <span className='modal-send'>The order confirmation has been sent to your @email</span>
                    </div>
                    <div className="modal-date bottom">
                        <span className='modal-bold'>Transaction Date</span>
                        <span>{props.transactionDate ? props.transactionDate.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}</span>
                    </div>
                    <div className="modal-method bottom">
                        <span className='modal-bold'>Payment Method</span>
                        <span>Mastercard</span>
                    </div>
                    <div className="modal-sub-total bottom">
                        <span className='modal-bold'>Sub total:</span>
                        <span className='modal-bold'>$ {props.grandTotal.toFixed(2)}</span>
                    </div>
                    <div className="modal-component bottom">
                        <FlexLine text='Tax collected: ' number={6.50}></FlexLine>
                        <FlexLine text='Shipment cost: ' number={0.8}></FlexLine>
                    </div>
                    <div className="modal-total modal-bold">
                        <FlexLine text='Grand total: ' number={props.grandTotal + 6.5 + 0.8}></FlexLine>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={(e) => handleContinue(e)}>Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;