import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from 'react-icons/ai';
import filterIcon from '../../assets/svg/filterIcon.svg';
import InvoiceCard from "./InvoiceCard";
import NoSelectedList from "./NoSelectedList";
import InvoiceDetail from "./InvoiceDetail";
import { useState } from "react";

const InvoicesPageBody = () => {
    const [ detailData, setDetailData ] = useState(undefined);

    const invoiceCardOnClick = (detailData) => {
        setDetailData(detailData);
    }

    return(
        <>
            <Row className='m-0'>
                <Col md={6} className='p-0'>
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
                        <Container fluid className="invoice-cards-container p-0" style={{height: 'calc(100vh - 150px)', overflow:'auto'}}>
                            {DATA_DUMY.map(data => <InvoiceCard invoiceData={data} onClick={() => {invoiceCardOnClick(data)}} selected={data.id === detailData?.id}/>)}
                        </Container>
                    </Container>
                </Col>
                {detailData === undefined ? <NoSelectedList/> : <InvoiceDetail detailData={detailData}/>}
                
            </Row>
        </>
    );
}

export default InvoicesPageBody;

const DATA_DUMY = [
    {
        id: 'INV-00341212',
        payment_status: "Paid",
        total_price: 24800000,
        due_at: "5 Dec 2022",
        created_at : "24 Nov 2022",
        updated_at: "",
        merchant: {
            id: "string",
            name: "string",
            display_profile_url: "string",
            address: "string"
        },
        customer: {
            id: "1231233",
            name: "Alvin Wiraprathama",
            email: "wiraprathamaalvin@gmail.com",
            address: "Jalan Gajah Waktra no 1"
        },
        "payment_method": {
            "payment_type": "manual",
            "bank_name": "string",
            "bank_code": "string",
            "bank_number": "string",
            "on_behalf_of": "string"
        },
        items: [
            {
            product: "Asus Vivobook",
            quantity: 2,
            price: 12000000,
            total_price: 24000000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "SSD Samsung Evo",
            quantity: 1,
            price: 800000,
            total_price: 800000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "Shipping",
            quantity: 1,
            price: 0,
            total_price: 0,
            created_at: "string",
            updated_at: "string"
            },
        ]
    },
    {
        id: 'INV-00341213',
        payment_status: "Unpaid",
        total_price: 20000000,
        due_at: "28 Nov 2022",
        created_at : "24 Nov 2022",
        updated_at: "",
        merchant: {
            id: "string",
            name: "string",
            display_profile_url: "string",
            address: "string"
        },
        customer: {
            id: "1231234",
            name: "Abdullah Nouval Shidqi",
            email: "abullah.nouval@gmail.com",
            address: "Jalan Kawista no 2"
        },
        "payment_method": {
            "payment_type": "manual",
            "bank_name": "string",
            "bank_code": "string",
            "bank_number": "string",
            "on_behalf_of": "string"
        },
        items: [
            {
            product: "Microsoft Surface Pro 4",
            quantity: 1,
            price: 12000000,
            total_price: 12000000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "SSD Seagate",
            quantity: 1,
            price: 800000,
            total_price: 800000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "Shipping",
            quantity: 1,
            price: 0,
            total_price: 0,
            created_at: "string",
            updated_at: "string"
            },
        ]
    },
    {
        id: 'INV-00341215',
        payment_status: "Unpaid",
        total_price: 24800000,
        due_at: "7 Dec 2022",
        created_at : "24 Nov 2022",
        updated_at: "",
        merchant: {
            id: "string",
            name: "string",
            display_profile_url: "string",
            address: "string"
        },
        customer: {
            id: "1231233",
            name: "Alvin Wiraprathama",
            email: "wiraprathamaalvin@gmail.com",
            address: "Jalan Gajah Waktra no 1"
        },
        "payment_method": {
            "payment_type": "manual",
            "bank_name": "string",
            "bank_code": "string",
            "bank_number": "string",
            "on_behalf_of": "string"
        },
        items: [
            {
            product: "Asus Vivobook",
            quantity: 2,
            price: 12000000,
            total_price: 24000000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "SSD Samsung Evo",
            quantity: 1,
            price: 800000,
            total_price: 800000,
            created_at: "string",
            updated_at: "string"
            },
            {
            product: "Shipping",
            quantity: 1,
            price: 0,
            total_price: 0,
            created_at: "string",
            updated_at: "string"
            },
        ]
    },
]