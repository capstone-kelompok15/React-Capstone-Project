import { Col, Container, Row } from "react-bootstrap";
import LoginCarousel from "../loginPage/LoginCarousel";
import RegisterForm from "./RegisterForm";

const RegisterPageBody = () => {
    return(
        <Container fluid >
            <Row style={{height: '100vh'}}>
                <Col lg className='d-flex flex-column justify-content-between align-items-center'>
                    <Container style={{height: '50px'}}></Container>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <RegisterForm/>
                    </div>
                    <div className="mb-4 mt-5 login-copyright">© Copyright 2022 Kelompok 15 Capstone Project - Alterra Academy</div>
                </Col>
                <Col lg className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor: '#173468'}}>
                    <LoginCarousel/>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPageBody;