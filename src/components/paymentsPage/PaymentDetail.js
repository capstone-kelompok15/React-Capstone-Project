import { Col, Container, Table } from "react-bootstrap";
import formatRupiah from "../../utils/formatRupiah";
import detailDocumentIcon from '../../assets/svg/detailDocumentIcon.svg';
import deleteIcon from '../../assets/svg/deleteIcon.svg';
import paymentDollarIcon from '../../assets/svg/paymentDollarIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import { getPaymentsDetailData } from "../../redux/reducers/paymentDetailSlice";
import paymentGetClassnameByStatus from "../../utils/paymentGetClassnameByStatus";
import { showRejectionModal } from "../../redux/reducers/paymentRejectionModalSlice";
import moment from "moment";

const PaymentDetail = () => {
    const dispatch = useDispatch();
    const paymentDetailData = useSelector(getPaymentsDetailData);
    const paymentClassname = paymentGetClassnameByStatus(paymentDetailData.payment_status_name);
    const allTotal = formatRupiah(paymentDetailData.total_price);

    const rejectOnClick = () => {
        dispatch(showRejectionModal());
    }

    return(
        <Col md={6} className='p-0 invoice-detail-column' style={{overflow: 'auto',height: 'calc(100vh - 65px)'}}>
            <Container fluid className='p-0'>
                <div style={{margin: '40px 40px 40px'}}>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div className='d-flex flex-column'>
                            <div className="invoice-detail-id-text">{`INV-${paymentDetailData.invoice_id}`}</div>
                            <div className="d-flex flex-row justify-content-start align-items-center gap-3" style={{paddingTop: '20px'}}>
                                <div className="d-flex flex-row justify-content-start align-items-center" style={{gap: '0px'}}>
                                    <div className='inovice-detail-status'>Payment Status</div>
                                    <div>:</div>
                                </div>
                                <div className={`payment-detail-status-box ${paymentClassname}`}>{paymentDetailData.payment_status_name}</div>
                            </div>
                            <div className="invoice-detail-payment-type" style={{paddingTop: '10px'}}>Payment Type : {paymentDetailData.payment_type_name}</div>
                        </div>
                        <div className="d-flex flex-column justfiy-content-center align-items-center">
                            <div className='invoice-detail-costumer-id-text'>Customer ID : {paymentDetailData.customer_id}</div>
                            <div className='invoice-check-recepient-button'>
                                <img src={detailDocumentIcon} alt='not found'/>
                                Check Transfer Receipt
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{marginTop: '18px', backgroundColor: 'white', padding: '60px 27px'}}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                                <div className="invoice-detail-underlined-container main-text">Toko Sejahtera</div>
                                <div className="invoice-detail-underlined-container main-text">Jalan Sumatra no 2</div>
                            </div>
                            <div className="invoice-detail-main-title">INVOICE</div>
                        </div>
                        <div className='main-text' style={{paddingTop: '35px'}}>Bill to:</div>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div className="d-flex flex-column">
                                <div className="invoice-detail-underlined-container sub-text">{paymentDetailData.customer_name}</div>
                                <div className="invoice-detail-underlined-container sub-text">{paymentDetailData.customer_email}</div>
                                <div className="invoice-detail-underlined-container sub-text">{paymentDetailData.customer_address}</div>
                            </div>
                            <div className="d-flex flex-column sub-text2" style={{gap: '16px'}}>
                                <div className="d-flex flex-row" style={{gap: '32px'}}>
                                    <div>Invoice</div>
                                    <div>: {paymentDetailData.id}</div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '5px'}}>
                                    <div>Invoice Date</div>
                                    <div>: {moment(paymentDetailData.created_at).format('DD MMMM YYYY')}</div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '22px'}}>
                                    <div>Due Date</div>
                                    <div>: {moment(paymentDetailData.due_at).format('DD MMMM YYYY')}</div>
                                </div>
                            </div>
                        </div>
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
                                    {paymentDetailData.invoice_detail.map(
                                        (data) => 
                                        <tr className="table-body-text">
                                            <td className="table-data">{data.product}</td>
                                            <td className="table-data text-center">{data.quantity}</td>
                                            <td className="table-data text-center">{data.price === 0 ? 'Free' : formatRupiah(data.price)}</td>
                                            <td className="table-data text-center">{data.total_price === 0 ? 'Free' : formatRupiah(data.total_price)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                            <div className="invoice-detail-total-container">
                                <div>Total :</div>
                                <div>{allTotal}</div>
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
                    <div className='d-flex flex-row justify-content-end align-items-center' style={{paddingTop: '30px', gap:'10px'}}>
                        <div className="invoice-payment-reject-button" onClick={rejectOnClick}>
                            <img src={deleteIcon} alt='not found'/>
                            Reject Payment
                        </div>
                        <div className="invoice-payment-confirm-button">
                            <img src={paymentDollarIcon} alt='not found'/>
                            Confirm Payment
                        </div>
                    </div>
                </div>
            </Container>
        </Col>
    )
}

export default PaymentDetail;