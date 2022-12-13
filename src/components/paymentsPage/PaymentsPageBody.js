import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import filterIcon from '../../assets/svg/filterIcon.svg';
import { getPaymentsDetailData } from "../../redux/reducers/paymentDetailSlice";
import { getPaymentModalShowStatus, showFilterModal } from "../../redux/reducers/paymentFilterModalSlice";
import { getRejectionModalStatus } from "../../redux/reducers/paymentRejectionModalSlice";
import { getPaymentsData, getPaymentsFilteredData, getPaymentsFilterStatus } from "../../redux/reducers/paymentSlice";
import NoSelectedList from "../invoicePage/NoSelectedList";
import NoPayments from "./NoPayments";
import PaymentCard from "./PaymentCard";
import PaymentDetail from "./PaymentDetail";
import PaymentFilterModal from "./PaymentFIlterModal";
import PaymentRejectionModal from "./PaymentRejectionModal";

const PaymentsPageBody = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filterStatus = useSelector(getPaymentsFilterStatus);
    const filteredData = useSelector(getPaymentsFilteredData);
    const isShownFilterModal = useSelector(getPaymentModalShowStatus);
    const isShownRejectionModal = useSelector(getRejectionModalStatus);
    const paymentDetailData = useSelector(getPaymentsDetailData);
    const paymentsData = useSelector(getPaymentsData);
    const [ currentPaymentsData, setcurrentPaymentsData ] = useState(paymentsData);

    const newInvoicseButtonOnClick = () => {
        navigate('/home/invoices/newInvoices')
    }

    useEffect(() => {
        if(filteredData === undefined){
            setcurrentPaymentsData(() => [...paymentsData]);
        } else {
            setcurrentPaymentsData(() => [...filteredData]);
        }
    }, [filteredData, filterStatus, setcurrentPaymentsData, paymentsData]);

    return(
        <>
            <Row className='m-0'>
                <Col md={6} className='p-0'>
                    <Container fluid className="p-0" style={{backgroundColor: 'white', height: 'calc(100vh - 65px)', borderRight: '2px solid #CDCDCD'}}>
                        <div className="d-flex flex-row justify-content-between align-items-center" style={{padding: '40px 40px 10px'}}>
                            <div className='invoice-title'>All Payments</div>
                            <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
                                <div className="new-invoice-button" onClick={newInvoicseButtonOnClick}>
                                    <AiFillPlusCircle size={20}/>
                                    <div>New Invoices</div>
                                </div>
                                <img className="filter-invoice" src={filterIcon} alt="Test" onClick={() => {dispatch(showFilterModal())}}/>
                            </div>
                        </div>
                        {currentPaymentsData.length === 0 ? <NoPayments/> :
                        <Container fluid className="invoice-cards-container p-0" style={{height: 'calc(100vh - 150px)', overflow:'auto'}}>
                            {currentPaymentsData.map((data, i) => <PaymentCard key={i} data={data} selected={data.id === paymentDetailData?.id}/>)}
                        </Container>
                        }
                    </Container>
                </Col>
                {paymentDetailData === undefined ? <NoSelectedList/> : <PaymentDetail/>}
            </Row>
            {isShownFilterModal ? <PaymentFilterModal/> : <></>}
            {isShownRejectionModal ? <PaymentRejectionModal/> : <></>}
        </>
    );
}

export default PaymentsPageBody;