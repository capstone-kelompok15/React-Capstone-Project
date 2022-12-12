import { Col, Container, Row, Table } from "react-bootstrap";
import {useDetectClickOutside} from "react-detect-click-outside";
import Moment from 'moment'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import pencilIcon from '../../assets/svg/pencilIcon.svg';
import trashIcon from '../../assets/svg/trashIcon.svg'
import dropdownIcon from '../../assets/svg/dropdownIcon.svg'
import UserDataDropdownCard from "./UserDataDropdownCard";
import { useState } from "react";
import CostumDatePicker from "./CotumDatePicker";

const FORM_BASE_DATA = {
    email: '',
    name: '',
    address: ''
}

const NewInvoicesBody = () => {
    const [ showDropdown, setShowDropdown ] = useState(false);

    const [ formData, setFormData ] = useState(FORM_BASE_DATA)

    const [ startDate, setStartDate ] = useState(new Date());

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const currentDate = Moment().format('DD MMM YYYY');

    const ref = useDetectClickOutside({ onTriggered: () => {
        if(document.activeElement === ref.current){
            return
        }
        setShowDropdown(false);
    }});

    const dropdownCardOnClick = (userData) => {
        setFormData(prev => ({
            ...prev,
            email: userData.email,
            name: userData.name,
            address: userData.address
        }))
    }

    const dropdownIconOnClick = () => {
        ref.current.focus();
        setShowDropdown(true);
    }

    const toShowDropDown = () => {
        setShowDropdown(true);
    }

    return(
        <Container fluid className="p-0" style={{height: 'calc(100vh - 64px)'}}>
            <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                <div className='d-flex justify-content-end' style={{width: '620px'}}>
                    <div className="create-invoice-button">
                        <img src={pencilIcon} alt='Not Found'/>
                        Create Invoice
                    </div>
                </div>
                <Container fluid style={{marginTop: '18px', backgroundColor: 'white', padding: '60px 27px', width: '620px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <div className="invoice-detail-underlined-container main-text">Toko Sejahtera</div>
                            <div className="invoice-detail-underlined-container main-text">Jalan Sumatra no 2</div>
                        </div>
                        <div className="invoice-detail-main-title">INVOICE</div>
                    </div>
                    <div className='main-text' style={{paddingTop: '35px'}}>Bill to:</div>
                        <Row>
                            <Col md>
                                <div className="invoice-detail-underlined-container sub-text" style={{position: 'relative'}}>
                                    <input
                                        name='email'
                                        ref={ref}
                                        type={'text'}
                                        style={{border: 'none', outline:'none', width: '100%'}}
                                        placeholder='Client Email'
                                        onMouseDown={toShowDropDown}
                                        onChange={onChange}
                                        value={formData.email}
                                        autoComplete='off'
                                    />
                                    <img src={dropdownIcon} alt='not found' style={{cursor: 'pointer'}} onClick={dropdownIconOnClick}/>
                                    {showDropdown ? <UserDataDropdownCard onClick={dropdownCardOnClick} currentEmail={formData.email}/> : <></>}
                                </div>
                                <div className="invoice-detail-underlined-container sub-text">
                                    <input
                                        className="disabled-input"
                                        type={'text'}
                                        style={{border: 'none', outline:'none', width: '100%'}}
                                        placeholder='Client Name'
                                        value={formData.name}
                                        disabled
                                    />
                                </div>
                                <div className="invoice-detail-underlined-container sub-text">
                                    <input 
                                        className="disabled-input"
                                        type={'text'}
                                        style={{border: 'none', outline:'none', width: '100%'}}
                                        placeholder='Client Address'
                                        value={formData.address}
                                        disabled
                                    />
                                </div>
                            </Col>
                            <Col md className="d-flex flex-column sub-text2" style={{gap: '16px'}}>
                                <div className="d-flex flex-row" style={{gap: '32px'}}>
                                    <div>Invoice</div>
                                    <div>: </div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '5px'}}>
                                    <div>Invoice Date</div>
                                    <div>:</div>
                                    <div>{currentDate}</div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '22px'}}>
                                    <div>Due Date</div>
                                    <div className="d-flex flex-row" style={{gap: '5px'}}>:
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<CostumDatePicker />}
                                    />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    
                    <div style={{paddingTop: '35px'}}>
                        <Table responsive='sm'>
                            <thead style={{backgroundColor: '#173468'}}>
                                <tr className="table-head-text">
                                    <th>Item Description</th>
                                    <th className="text-center">Qty</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-body-text">
                                    <td className="table-data" style={{width: '265px'}}>
                                        <input type='text' style={{border: 'none', outline: 'none', width: '100%'}} placeholder={'Input item name'}/>
                                    </td>
                                    <td className="table-data text-center">
                                        <input className="text-center" type={'text'} style={{border: 'none', outline: 'none', width: '20px'}} value={1}/>
                                    </td>
                                    <td className="table-data text-center" style={{width: '100px'}}>
                                        <input className="text-center" type={'text'} style={{border: 'none', outline: 'none', width: '100%'}} value={0}/>
                                    </td>
                                    <td className="table-data text-center">{0}</td>
                                    <td className="table-trash-icon">
                                        <img src={trashIcon} alt='Not Found' style={{cursor: 'pointer'}}/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="d-flex flex-row justify-content-end" style={{marginRight: '35px'}}>
                        <div className="invoice-detail-total-container">
                            <div>Total</div>
                            <div>{0}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{paddingTop: '35px', gap:'10px'}}>
                        <div className="sub-text2">
                            Notes
                        </div>
                        <div className="sub-text">
                            It was pleasure doing business with you
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{paddingTop: '35px', gap:'10px'}}>
                        <div className="sub-text2">
                            Terms and Conditions
                        </div>
                        <div className="sub-text">
                            Please make the payment by the due date
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    )
}

export default NewInvoicesBody;