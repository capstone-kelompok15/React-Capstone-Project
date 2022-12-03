import { Col, Container, Row } from "react-bootstrap";
import { AiFillPlusCircle } from 'react-icons/ai';
import filterIcon from '../../assets/svg/filterIcon.svg';

const InvoicesPageBody = () => {
    return(
        <>
            <Row>
                <Col md style={{margin: 0}}>
                    <Container fluid className="pt-4 px-5" style={{backgroundColor: 'white', height: 'calc(100vh - 65px)'}}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className='invoice-title'>All Invoices</div>
                            <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
                                <div className="new-invoice-button">
                                    <AiFillPlusCircle size={20}/>
                                    <div>New Invoices</div>
                                </div>
                                {<img className="filter-invoice" src={filterIcon} alt="Test"/>}
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md>
                    Test
                </Col>
            </Row>
        </>
    );
}

export default InvoicesPageBody;