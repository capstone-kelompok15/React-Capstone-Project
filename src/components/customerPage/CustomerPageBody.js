import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image3 from "../../assets/image/image3.png";
import Image4 from "../../assets/image/image4.png";


const CustomerPageBody = () => {
    const [bg, changeBGColor] = React.useState(1);
    
    return(
        <div className="mt-4">
            <Container>
                <Row>
                <Col>
                    <div>
                    <h4 style={{ fontWeight: "600", color: "#173486" }}>All Customers</h4>
                    <ListGroup as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex align-items-center"
                            onClick={() => changeBGColor(1)}
                            style={{
                                backgroundColor: bg === 1 ? "#EAF0FA" : "#FFF",
                            }}
                        >
                            <div>
                                <img src={Image3} alt="" width={60} />
                            </div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Wayan Kulkas</div>
                                <div>
                                <a href="" style={{ textDecoration: "none", fontWeight: "500", color: "#173486" }}>
                                    wayankulkas@gmail.com
                                </a>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChevronRight} size="lg" style={{ color: "#173486" }} />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                </Col>
                <Col style={{ marginLeft: "50px" }}>
                    <div className="d-flex justify-content-flex-start" style={{ gap: "1rem" }}>
                    <div>
                        <img src={Image3} alt="" width={100} />
                    </div>
                    <div>
                        <div className="fw-bold fs-2">Wayan Kulkas</div>
                        <div>
                        <a href="" style={{ textDecoration: "none", fontWeight: "500", color: "#173486" }}>
                            wayankulkas@gmail.com
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="mt-4">
                    <h4 style={{ fontWeight: "600", color: "#173486" }}>Invoice History</h4>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#F57D15", justifyContent: "center" }}>
                            3 Days Left
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div style={{ fontWeight: "500", color: "#173486" }}>
                            <div style={{ paddingBottom: "5px" }}>INV-00341212</div>
                            <div>03 Dec 2022</div>
                        </div>
                        <div className="d-flex" style={{ flexDirection: "column", alignContent: "space-between" }}>
                            <div style={{ fontWeight: "700", color: "#173486", paddingBottom: "5px" }}>Rp 2.200.000</div>
                            <div className="d-flex" style={{ fontWeight: "700", color: "#329059", justifyContent: "center" }}>
                            Success
                            </div>
                        </div>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomerPageBody;