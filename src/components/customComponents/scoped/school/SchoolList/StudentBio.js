import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'

export default function StudentBio() {
    return (
        <Card className="w-100 h-100 overflow-auto">
            <CardHeader>
                <CardTitle>Muhammad Usama Sajid</CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="mb-1">
                    <Col sm="4">
                        <span style={{fontSize:'1.1rem'}} className="font-weight-bold text-medium-1">Birth date</span>
                    </Col>
                    <Col sm="8">
                        <span style={{fontSize:'1.1rem'}}>28 January 1998</span>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col sm="4">
                        <span style={{fontSize:'1.1rem'}} className="font-weight-bold text-medium-1">Mobile</span>
                    </Col>
                    <Col sm="8">
                        <span style={{fontSize:'1.1rem'}}>	+65958951757</span>
                    </Col>
                </Row>

                <Row className="mb-1">
                    <Col sm="4">
                        <span style={{fontSize:'1.1rem'}} className="font-weight-bold text-medium-1">Website</span>
                    </Col>
                    <Col sm="8">
                        <span style={{fontSize:'1.1rem'}}>https://rowboat.com/insititious/Angelo</span>
                    </Col>
                </Row>

                <Row className="mb-1">
                    <Col sm="4">
                        <span style={{fontSize:'1.1rem'}} className="font-weight-bold text-medium-1">Languages</span>
                    </Col>
                    <Col sm="8">
                        <span style={{fontSize:'1.1rem'}}>English, Arabic</span>
                    </Col>
                </Row>

                <Row className="mb-1">
                    <Col sm="4">
                        <span style={{fontSize:'1.1rem'}} className="font-weight-bold text-medium-1">Gender</span>
                    </Col>
                    <Col sm="8">
                        <span style={{fontSize:'1.1rem'}}>Male</span>
                    </Col>
                </Row>

                <Row className="mb-1">
                <Col sm="4" />
                <Col sm="8">
                    <div className="d-flex align-items-center mt-1">
                    <a href="#" class="btn btn-outline-danger mr-1 waves-effect waves-light"><i class="feather icon-trash-2"></i> Delete</a>
                    <button class="btn btn-outline-primary mr-1 waves-effect waves-light"><i class="feather icon-calendar"></i> Calender</button>
                    <button class="btn btn-primary waves-effect waves-light"><i class="feather icon-file"></i> Customer Card</button>
                    </div>
               
                </Col>

                </Row>

                
                
                
            </CardBody>

        </Card>
    )
}
