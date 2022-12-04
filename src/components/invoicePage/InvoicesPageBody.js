import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from 'react-icons/ai';
import filterIcon from '../../assets/svg/filterIcon.svg';
import personPointing from '../../assets/svg/personPointing.svg';
import InvoiceCard from "./InvoiceCard";

const InvoicesPageBody = () => {
    return(
        <>
            <Row>
                <Col md>
                    <Container fluid className="p-0" style={{backgroundColor: 'white', height: 'calc(100vh - 65px)', borderRight: '2px solid #CDCDCD'}}>
                        <div className="d-flex flex-row justify-content-between align-items-center" style={{padding: '40px 40px 10px'}}>
                            <div className='invoice-title'>All Invoices</div>
                            <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
                                <div className="new-invoice-button">
                                    <AiFillPlusCircle size={20}/>
                                    <div>New Invoices</div>
                                </div>
                                <img className="filter-invoice" src={filterIcon} alt="Test"/>
                            </div>
                        </div>
                        <Container fluid className="invoice-cards-container p-0" style={{height: 'calc(100vh - 150px)', overflowX: 'hidden'}}>
                            {DATA_DUMY.map(data => <InvoiceCard invoiceData={data}/>)}
                        </Container>
                    </Container>
                </Col>
                <Col md className="d-flex flex-column justify-content-center align-items-center">
                    <img src={personPointing} alt='not found'/>
                    <div className="no-selected-list-text">You can select one invoice from list to view</div>
                </Col>
            </Row>
        </>
    );
}

export default InvoicesPageBody;

const DATA_DUMY = [
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
    {
        name: 'Alvin Wiraprathama',
        invoiceId: 'INV-00341212',
        dateTime: '03 Dec 2022',
        price: 'Rp. 2.200.000',
        due: 'Overdue by 3 Days'
    },
]