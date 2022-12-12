import { Col, Container, Row, Table } from "react-bootstrap";
import pencilIcon from '../../assets/svg/pencilIcon.svg';
import trashIcon from '../../assets/svg/trashIcon.svg'

const NewInvoicesBody = () => {
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
                                <div className="invoice-detail-underlined-container sub-text">{''}</div>
                                <div className="invoice-detail-underlined-container sub-text">{''}</div>
                                <div className="invoice-detail-underlined-container sub-text">{''}</div>
                            </Col>
                            <Col md className="d-flex flex-column sub-text2" style={{gap: '16px'}}>
                                <div className="d-flex flex-row" style={{gap: '32px'}}>
                                    <div>Invoice</div>
                                    <div>: </div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '5px'}}>
                                    <div>Invoice Date</div>
                                    <div>: </div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '22px'}}>
                                    <div>Due Date</div>
                                    <div>: </div>
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