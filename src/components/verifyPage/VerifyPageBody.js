import { Col, Container, Row } from "react-bootstrap";
import LoginCarousel from "../loginPage/LoginCarousel";
import verifiedIcon from '../../assets/svg/verifiedIcon.svg'

const VerifyPageBody = () => {
    return(
        <Container fluid>
            <Row style={{height: '100vh'}}>
                <Col lg className='d-flex flex-column justify-content-between align-items-center'>
                    <Container style={{height: '50px'}}/>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={verifiedIcon} alt='NotFound'/>
                        <div className="verified-title-text">Yeay, your account has been succesfully created</div>
                        <div className="verified-button">Continue to Login</div>
                    </div>
                    <div className="mb-4 mt-5 login-copyright">© Copyright 2022 Kelompok 15 Capstone Project - Alterra Academy</div>
                </Col>
                <Col lg className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor: '#173468'}}>
                    <LoginCarousel/>
                </Col>
            </Row>
        </Container>
    )
}

export default VerifyPageBody;