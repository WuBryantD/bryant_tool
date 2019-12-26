import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

export default class CT_CostForm extends Component {
    render() {

        const colStyle = { borderStyle: 'solid', borderWidth: '0.5px', padding: '0 0' };
        const inputStyle = { height: '100%', width: '100%' };
        return (
            <div>
                <Container style={{ fontSize: '0.85rem', borderStyle: 'solid', borderWidth: '0.5px' }}>
                    <Row  >
                        <Col xs='8' sm='8' lg='6' style={colStyle}  >
                            商品名稱
                        </Col>
                        <Col xs='2' sm='2' lg='2' style={colStyle}>
                            類別
                        </Col>
                        <Col xs='2' sm='2' lg='4' style={colStyle}>
                            金額
                        </Col>
                    </Row>
                    <Row >
                        <Col xs='8' sm='8' lg='6' style={colStyle} >
                            <input type='text' placeholder='輸入商品名稱' style={inputStyle} ></input>
                        </Col>
                        <Col xs='2' sm='2' lg='2' style={colStyle}>
                            <select style={inputStyle} >
                                <option value='food'>食</option>
                                <option value='clothing'>衣</option>
                                <option value='housing'>住</option>
                                <option value='transportation'>行</option>
                                <option value='education'>育</option>
                                <option value='pleasure'>樂</option>
                            </select>
                        </Col>
                        <Col xs='2' sm='2' lg='4' style={colStyle}>
                            <input type='text' placeholder='金額' style={inputStyle}></input>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
