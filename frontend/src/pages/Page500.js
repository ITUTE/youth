import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Page500 = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="clearfix d-flex flex-column justify-content-center">
                            <div className="float-start display-3 me-4 d-flex justify-content-center">
                                <h1 className="display-1 text-danger fw-bolder"
                                    style={{ fontSize: '5rem' }}>
                                    Opps
                                </h1>
                                <h1 className="h1 ps-4 pt-4 text-warning"
                                    style={{ fontSize: '3rem' }}>
                                    Đã xảy ra lỗi!
                                </h1>
                            </div>

                            <div align="center">
                                <Image
                                    src={process.env.PUBLIC_URL + '/assets/images/500.svg'}
                                    width={300} height={300}
                                />
                            </div>

                            <h6 align="center" className="pt-4 text-success"
                                style={{ fontSize: '1.5rem' }}>
                                Trang bạn yêu cầu tạm thời không truy cập được. Vui lòng quay lại sau!
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page500