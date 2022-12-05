import { Col, Container, Table } from "react-bootstrap";
import downloadLogo from '../../assets/svg/downloadLogo.svg';
import mailIcon from '../../assets/svg/mailIcon.svg';
import formatRupiah from "../../utils/formatRupiah";
import getClassNameByStatus from "../../utils/getClassNameByStatus";
import getDateDifferences from "../../utils/getDateDifferences";

const InvoiceDetail = (props) => {
    const {detailData} = props;
    const statusClassName = getClassNameByStatus(detailData.payment_status, detailData.due_at);
    const statusValue = getDateDifferences(detailData.payment_status, detailData.due_at);
    const allTotal = formatRupiah(detailData.total_price);

    return(
        <Col md={6} className='p-0' style={{overflow: 'auto',height: 'calc(100vh - 65px)'}}>
            <Container fluid className='p-0'>
                <div style={{margin: '40px 40px 40px'}}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="invoice-detail-id-text">{detailData.id}</div>
                        <div className="invoice-detail-button">
                            <img src={downloadLogo} alt={'not found'} />
                            <div>Download</div>
                        </div>
                    </div>
                    <div className='invoice-detail-costumer-id-text'>Customer ID : {detailData.customer.id}</div>
                    <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                        <div className="d-flex flex-row justify-content-start align-items-center" style={{gap: '26px'}}>
                            <div className='inovice-detail-status'>Payment Status</div>
                            <div>:</div>
                        </div>
                        <div className={`inovice-detail-status-box ${statusClassName}`}>{detailData.payment_status}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row justify-content-start align-items-center gap-3 pt-2">
                            <div className='inovice-detail-status'>Payment Time Left :</div>
                            <div className={`inovice-detail-status-box ${statusClassName}`}>{statusValue}</div>
                        </div>
                        <div className="invoice-detail-send-button">
                            <img src={mailIcon} alt='not found' />
                            Send via email
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
                                <div className="invoice-detail-underlined-container sub-text">{detailData.customer.name}</div>
                                <div className="invoice-detail-underlined-container sub-text">{detailData.customer.email}</div>
                                <div className="invoice-detail-underlined-container sub-text">{detailData.customer.address}</div>
                            </div>
                            <div className="d-flex flex-column sub-text2" style={{gap: '16px'}}>
                                <div className="d-flex flex-row" style={{gap: '32px'}}>
                                    <div>Invoice</div>
                                    <div>: {detailData.id}</div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '5px'}}>
                                    <div>Invoice Date</div>
                                    <div>: {detailData.created_at}</div>
                                </div>
                                <div className="d-flex flex-row" style={{gap: '22px'}}>
                                    <div>Due Date</div>
                                    <div>: {detailData.due_at}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingTop: '35px'}}>
                            <Table responsive='sm'>
                                <thead style={{backgroundColor: '#173468'}}>
                                    <tr className="table-head-text">
                                        <th>Item Description</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailData.items.map(
                                        (data) => 
                                        <tr className="table-body-text">
                                            <td className="table-data">{data.product}</td>
                                            <td className="table-data">{data.quantity}</td>
                                            <td className="table-data">{data.price === 0 ? 'Free' : formatRupiah(data.price)}</td>
                                            <td className="table-data">{data.total_price === 0 ? 'Free' : formatRupiah(data.total_price)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                            <div className="invoice-detail-total-container">
                                <div>Total</div>
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
                </div>
            </Container>
        </Col>
    );
}

export default InvoiceDetail;