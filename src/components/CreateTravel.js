import React, { Component } from 'react'
import TravelForm from './CT_TravelForm'
import Path from './CT_Path'
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap'

export class CreateTravel extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col style={{ fontSize: '2rem' }}>
                            創建旅程
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='3' lg='2'>
                            標題名稱
                        </Col>
                        <Col sm='9' lg='10'>
                            <input type='text' style={{ borderRadius: '10px', borderStyle: 'solid', borderColor: 'lightgray' }} placeholder='請輸入標題名稱'></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='3' lg='2'>
                            旅遊天數
                        </Col>
                        <Col sm='9' lg='10'>
                            <input type='radio' ></input>一天  &nbsp; <input type='radio' ></input>多天
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='3' lg='2'>
                            日期
                        </Col>
                        <Col sm='9' lg='10'>
                            出發日 &nbsp;<input type='date' style={{ borderRadius: '5px', borderStyle: 'solid', borderColor: 'lightgray' }}></input>
                            <br />
                            結束日 &nbsp;<input type='date' style={{ borderRadius: '5px', borderStyle: 'solid', borderColor: 'lightgray' }}></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            行程
                </Col>
                        <Col sm='9' lg='10'>
                            <br />
                            <Row>
                                <Col lg='12'>
                                    DAY1
                            <TravelForm />
                                </Col>
                                <Col sm='3' lg='12'>
                                    <Path />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
                <br />


            </div>
        )
    }
}

export default CreateTravel
