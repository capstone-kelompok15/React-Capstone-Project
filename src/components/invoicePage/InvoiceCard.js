import { Col, Row } from "react-bootstrap";
import arrowIcon from '../../assets/svg/arrowIcon.svg'
import documentIcon from '../../assets/svg/documentIcon.svg'

const InvoiceCard = (props) => {
    const { invoiceData } = props;

    return(
        <Row fluid className='invoice-card align-items-center' style={{padding: '10px 0px 10px 40px', borderBottom: '1px solid #CDCDCD'}}>
            <Col md={1}>
                <img src={documentIcon} alt={'Not Found'}/>
            </Col>
            <Col md={5}>
                <div className="invoice-card-title">{invoiceData.name}</div>
                <div className="invoice-card-subtitle">{invoiceData.invoiceId} | {invoiceData.dateTime}</div>
            </Col>
            <Col md={4}>
                <div className="invoice-card-price">{invoiceData.price}</div>
                <div className="invoice-card-status">{invoiceData.due}</div>
            </Col>
            <Col md={1}>
                <img src={arrowIcon} alt='not found'/>
            </Col>
        </Row>
    );
}

export default InvoiceCard;