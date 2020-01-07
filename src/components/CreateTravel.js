import React, { Component } from 'react'
import TravelForm from './CT_TravelForm'
import Path from './CT_Path'
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
} from 'react-bootstrap'

import { connect } from "react-redux"; //react 組件 與 store 連接
import { handleInput_CT_title, handleInput_CT_startDate, handleInput_CT_endDate, handleInput_CT_days, handleBtn_CT_createAttraction, handleBtn_CT_createTravel, handleBtn_CT_createTravel_create, handleBtn_CT_createTravel_cancel } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';

class CreateTravel extends Component {


    render() {
        // const [show, setShow] = useState(false);

        //   const handleClose = () => setShow(false);
        //   const handleShow = () => setShow(true);

        return (
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <Button variant="primary"
                                onClick={this.props.handleBtn_createTravel}>
                                創建旅程
                            </Button>
                            <Modal
                                show={this.props.createTravelStatus}
                                size='sm'>
                                <Modal.Header >
                                    <Modal.Title>創建旅程</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col lg='12'>
                                            <Row>
                                                <Col >
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        標題名稱
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <input
                                                            type='text'
                                                            style={{ width:'100%',borderRadius: '10px', borderStyle: 'solid', borderColor: 'lightgray' }}
                                                            placeholder='請輸入標題名稱'
                                                            value={this.props.CT_titleInput}
                                                            onChange={this.props.handleInputTitle}></input>
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col >
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        出發日
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <input
                                                            type='date'
                                                            style={{ width:'100%',borderRadius: '5px', borderStyle: 'solid', borderColor: 'lightgray' }}
                                                            value={this.props.CT_startDate}
                                                            onChange={this.props.handleInputStartDate} />
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        結束日
                                                     </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <input
                                                            type='date'
                                                            style={{ width:'100%',borderRadius: '5px', borderStyle: 'solid', borderColor: 'lightgray' }} 
                                                            value={this.props.CT_endDate}
                                                            onChange={this.props.handleInputEndDate} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary"
                                        onClick={this.props.handleBtn_createTravel_cancel}>
                                        取消
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={this.props.handleBtn_createTravel_create}>
                                        建立
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col lg='6'>
                            <Button variant="primary"
                                onClick={this.props.handleBtn_createAttration}>
                                新增景點
                            </Button>
                            <Modal
                                show={this.props.createAttractionStatus}
                                size='lg'>
                                <Modal.Header>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col lg='12'>
                                            <TravelForm />
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col sm='3' lg='12'>
                                            <Path />
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary"
                                        onClick={this.props.handleBtn_createAttration}>
                                        取消
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={this.props.handleBtn_createAttration}>
                                        新增
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ fontSize: '2rem' }}>
                            <FontAwesomeIcon icon={faFrownOpen} />還沒建立旅程唷!
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => { //store裡面的state
    return {
        titleInput: state.CT_titleInput,
        startDateInput: state.CT_startDateInput,
        createAttractionStatus: state.CT_createAttrationBtn,
        createTravelStatus: state.CT_createTravelBtn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputTitle: (val) => {
            dispatch(handleInput_CT_title(val))
        },
        handleInputStartDate: (val) => {
            dispatch(handleInput_CT_startDate(val))
        },
        handleInputEndDate: (val) => {
            dispatch(handleInput_CT_endDate(val))
        },
        handleInput_Days: (val) => {
            dispatch(handleInput_CT_days(val))
        },
        handleBtn_createAttration: () => {
            dispatch(handleBtn_CT_createAttraction())
        },
        handleBtn_createTravel: () => {
            dispatch(handleBtn_CT_createTravel())
        },
        handleBtn_createTravel_create: () => {
            dispatch(handleBtn_CT_createTravel_create())
        },
        handleBtn_createTravel_cancel: () => {
            dispatch(handleBtn_CT_createTravel_cancel())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTravel)
