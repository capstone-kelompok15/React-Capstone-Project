import { Col, Row } from "react-bootstrap";
import arrowIcon from '../../assets/svg/arrowIcon.svg'
import documentIcon from '../../assets/svg/documentIcon.svg'
import formatRupiah from "../../utils/formatRupiah";

const InvoiceCard = (props) => {
    const { invoiceData, onClick, selected } = props;

    console.log(invoiceData.customer);

    return(
        <Row fluid className={`invoice-card align-items-center m-0 ${selected ? 'selected' : ""}`} style={{padding: '10px 0px 10px 40px', borderBottom: '1px solid #CDCDCD'}} onClick={onClick}>
            <Col md={1} className='p-0'>
                <img src={documentIcon} alt={'Not Found'}/>
            </Col>
            <Col md={5} className='p-0'>
                <div className="invoice-card-title">{invoiceData.customer.name}</div>
                <div className="invoice-card-subtitle">{invoiceData.id} | {invoiceData.created_at}</div>
            </Col>
            <Col md={5} className='p-0'>
                <div className="invoice-card-price">{formatRupiah(invoiceData.total_price)}</div>
                <div className="invoice-card-status">{invoiceData.due_at}</div>
            </Col>
            <Col md={1} className='p-0'>
                <img src={arrowIcon} alt='not found'/>
            </Col>
        </Row>
    );
}

export default InvoiceCard;