import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from 'react-icons/ai';
import filterIcon from '../../assets/svg/filterIcon.svg';
import InvoiceCard from "./InvoiceCard";
import NoSelectedList from "./NoSelectedList";
import InvoiceDetail from "./InvoiceDetail";
import { useEffect, useState } from "react";
import InvoiceFilterModal from "./InvoiceFilterModal";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredData, getFilterStatus, getInvoicesData } from "../../redux/reducers/invoicesSlice";
import { getShowFilterModal, showFilterModal } from "../../redux/reducers/filterModalSlice";
import { getDetailData } from "../../redux/reducers/invoiceDetailSlice";
import NoInvoices from "./NoInvoices";

const InvoicesPageBody = () => {
    const dispatch = useDispatch();
    const data = useSelector(getInvoicesData);
    const [ invoicesData, setInvoicesData ] = useState(data);
    const detailData = useSelector(getDetailData);
    const filteredData = useSelector(getFilteredData);
    const filterStatus = useSelector(getFilterStatus);
    const isShownFilterModal = useSelector(getShowFilterModal);

    useEffect(() => {
        if(filteredData === undefined){
            setInvoicesData(() => [...data]);
        } else {
            setInvoicesData(() => [...filteredData]);
        }
    }, [filteredData, filterStatus, setInvoicesData, data]);

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
                                <img className="filter-invoice" src={filterIcon} alt="Test" onClick={() => dispatch(showFilterModal())}/>
                            </div>
                        </div>
                        {invoicesData.length === 0 ? <NoInvoices/> : 
                        <Container fluid className="invoice-cards-container p-0" style={{height: 'calc(100vh - 150px)', overflow:'auto'}}>
                            {invoicesData.map((data, i) => <InvoiceCard key={i} invoiceData={data} selected={data.id === detailData?.id}/>)}
                        </Container>
                        }
                    </Container>
                </Col>
                {detailData === undefined ? <NoSelectedList/> : <InvoiceDetail/>}
            </Row>
            {isShownFilterModal ? <InvoiceFilterModal/> : <></>}
        </>
    );
}

export default InvoicesPageBody;