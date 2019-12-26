import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'

export default class CT_Path extends Component {
    render() {
        return (
            <div>
                <Container >
                    <Row>
                        <Col lg='4'>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                                <FontAwesomeIcon icon={faLongArrowAltDown} style={{ fontSize: '4rem' }}></FontAwesomeIcon>
                            </div>
                        </Col>
                        <Col lg='8'>
                            <Row>
                                <Col lg='3' >
                                    交通工具
                                </Col>
                                <Col lg='9'>
                                    <select>
                                        <option value='bus'>公車</option>
                                        <option value='walk'>走路</option>
                                        <option value='train'>火車</option>
                                        <option value='highway'>高鐵</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='3'>
                                    路程時間
                                </Col>
                                <Col lg='9'>
                                    <input type='text' style={{ borderRadius: '5px', width: '1.5rem', borderStyle: 'solid', borderColor: 'lightgray' }}></input>小時
                                    <input type='text' style={{ borderRadius: '5px', width: '1.5rem', borderStyle: 'solid', borderColor: 'lightgray' }}></input>分鐘
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='3'>
                                    花費車資
                        </Col>
                                <Col lg='9'>
                                    <input type='text' style={{ borderRadius: '5px', width: '4.5rem', borderStyle: 'solid', borderColor: 'lightgray' }}></input>元
                        </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
