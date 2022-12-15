import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hideRejectionModal } from "../../redux/reducers/paymentRejectionModalSlice";

const PaymentRejectionModal = () => {
    const dispatch = useDispatch();
    const [ reasonValue, setReasonValue ] = useState();

    const onChange = (e) => {
        setReasonValue(e.target.value);
    }

    const backgroundOnClick = () => {
        dispatch(hideRejectionModal());
    }

    return(
        <>
            <div className="modal-test" onClick={backgroundOnClick}/>
            <Container className="rejection-modal-container">
                <div className='d-flex flex-column justify-content-start align-items-start w-100 h-100'>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="invoice-modal-filter-text">Filter</div>
                        <div className="invoice-modal-reset-text-button" onClick={backgroundOnClick}>Cancel</div>
                    </div>
                    <div className="invoice-modal-border"/>
                    <div>
                        <div className="form-check">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id="radio1" 
                                name="optradio" 
                                value="Transfer receipt doesn’t match"
                                onChange={onChange}
                                selected={reasonValue === 'Transfer receipt doesn’t match'}
                            />
                            <label className="form-check-label invoice-modal-label-text" for="radio1">Transfer receipt doesn’t match</label>
                        </div>
                        <div className="form-check">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id="radio2" 
                                name="optradio" 
                                value="Total amount doesn’t match"
                                onChange={onChange}
                                selected={reasonValue === 'Total amount doesn’t match'}
                            />
                            <label className="form-check-label invoice-modal-label-text" for="radio2">Total amount doesn’t match</label>
                        </div>
                        <div className="form-check">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id="radio3" 
                                name="optradio" 
                                value="Other"
                                onChange={onChange}
                                selected={reasonValue === 'Other'}
                            />
                            <label className="form-check-label invoice-modal-label-text" for="radio3">Other</label>
                        </div>
                        <Form.Control
                            style={{width: '452px', marginTop: '5px', transition: '0.5s', display: `${reasonValue === 'Other' ? '' : 'none'}`}}
                            name='reason'
                            type="text"
                            placeholder="Input your reason of payment rejection..."
                        />
                    </div>
                </div>
                <div className="modal-filter-submit-button" onClick={() => {}}>
                    Confirm
                </div>
            </Container>
        </>
    )
}

export default PaymentRejectionModal;