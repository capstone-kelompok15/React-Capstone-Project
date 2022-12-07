import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import filterIcon from '../../assets/svg/filterIcon.svg';
import { getPaymentsDetailData } from "../../redux/reducers/paymentDetailSlice";
import { getPaymentModalShowStatus, showFilterModal } from "../../redux/reducers/paymentFilterModalSlice";
import { getPaymentsData, getPaymentsFilteredData, getPaymentsFilterStatus } from "../../redux/reducers/paymentSlice";
import NoSelectedList from "../invoicePage/NoSelectedList";
import PaymentCard from "./PaymentCard";
import PaymentDetail from "./PaymentDetail";
import PaymentFilterModal from "./PaymentFIlterModal";

const PaymentsPageBody = () => {
    const [ currentPaymentsData, setcurrentPaymentsData ] = useState([]);
    const dispatch = useDispatch();
    const filterStatus = useSelector(getPaymentsFilterStatus);
    const filteredData = useSelector(getPaymentsFilteredData);
    const isShownFilterModal = useSelector(getPaymentModalShowStatus);
    const paymentDetailData = useSelector(getPaymentsDetailData);
    const paymentsData = useSelector(getPaymentsData);

    useEffect(() => {
        if(filterStatus === 'All'){
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
                                <div className="new-invoice-button">
                                    <AiFillPlusCircle size={20}/>
                                    <div>New Invoices</div>
                                </div>
                                <img className="filter-invoice" src={filterIcon} alt="Test" onClick={() => {dispatch(showFilterModal())}}/>
                            </div>
                        </div>
                        <Container fluid className="invoice-cards-container p-0" style={{height: 'calc(100vh - 150px)', overflow:'auto'}}>
                            {currentPaymentsData.map((data, i) => <PaymentCard key={i} data={data} selected={data.id === paymentDetailData?.id}/>)}
                        </Container>
                    </Container>
                </Col>
                {paymentDetailData === undefined ? <NoSelectedList/> : <PaymentDetail/>}
            </Row>
            {isShownFilterModal ? <PaymentFilterModal/> : <></>}
        </>
    );
}

export default PaymentsPageBody;