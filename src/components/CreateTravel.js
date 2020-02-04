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
import { handleInput_CT_title, handleInput_CT_startDate, handleInput_CT_endDate, handleBtn_CT_createAttraction, handleBtn_CT_createTravel, handleBtn_CT_createTravel_create, handleBtn_CT_createTravel_cancel } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import AttractionCard from '../components/CT_Card'
class CreateTravel extends Component {


    render() {
        let Data = this.props.data
        let title = Data[this.props.currentId-1].title
        let startDate = Data[this.props.currentId-1].startDate
        let endDate = Data[this.props.currentId-1].endDate
        let handleTitleBorderStyle = 'lightgray'
        let handleStartDateBorderStyle = 'lightgray'
        let handleEndDateBorderStyle = 'lightgray'



        if (this.props.createTravelError_titleNull !== '') {
            handleTitleBorderStyle = 'red'
        } else {
            handleTitleBorderStyle = 'lightgray'
        }
        if (this.props.createTravelError_startDateNull !== '') {
            handleStartDateBorderStyle = 'red'
        } else {
            handleStartDateBorderStyle = 'lightgray'
        }

        if (this.props.createTravelError_endDateSmall !== '') {
            handleEndDateBorderStyle = 'red'
        } else {
            if (this.props.createTravelError_endDateNull !== '') {
                handleEndDateBorderStyle = 'red'
            } else {
                handleEndDateBorderStyle = 'lightgray'
            }
        }




        return (
            <div>
                <br />
                <Container>
                    <Row>
                        <Col >
                            <div style={{ fontSize: '1.5rem' }}>
                                {title}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ fontSize: '1rem' }}>
                                {(startDate === '') ? '' : `${startDate}-${endDate}`}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='8'>
                            <Button variant="primary"
                                hidden={this.props.createTravelBtnStatus}
                                onClick={this.props.handleBtn_createTravel}>
                                創建旅程
                            </Button>
                            <Modal
                                onHide={() => { return false }}
                                show={this.props.createTravelModelStatus}
                                size='sm'
                                centered>
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
                                                            style={{ width: '100%', borderRadius: '10px', borderStyle: 'solid', borderColor: handleTitleBorderStyle }}
                                                            placeholder='請輸入標題名稱'
                                                            value={this.props.CT_titleInput}
                                                            onChange={this.props.handleInputTitle}
                                                            maxLength='20'
                                                        ></input>
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ color: 'red' }}>
                                                    {this.props.createTravelError_titleNull}
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
                                                            style={{ width: '100%', borderRadius: '5px', borderStyle: 'solid', borderColor: handleStartDateBorderStyle }}
                                                            value={this.props.CT_startDate}
                                                            onChange={this.props.handleInputStartDate} />
                                                        <br />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ color: 'red' }}>
                                                    {this.props.createTravelError_startDateNull}
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
                                                            style={{ width: '100%', borderRadius: '5px', borderStyle: 'solid', borderColor: handleEndDateBorderStyle }}
                                                            value={this.props.CT_endDate}
                                                            onChange={this.props.handleInputEndDate} />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col style={{ color: 'red' }}>
                                                    {this.props.createTravelError_endDateNull}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ color: 'red' }}>
                                                    {this.props.createTravelError_endDateSmall}
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
                        <Col lg='4'>
                            <div style={{ display: 'flex', }}>
                                <Button variant="primary"
                                    hidden={this.props.createAttractionBtnStatus}
                                    onClick={this.props.handleBtn_createAttraction}>
                                    新增景點
                            </Button>
                                <Modal
                                    onHide={() => { return false }}
                                    show={this.props.createAttractionStatus}
                                    size='lg'
                                    centered>
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
                                            onClick={this.props.handleBtn_createAttraction}>
                                            取消
                                    </Button>
                                        <Button
                                            variant="primary"
                                            onClick={this.props.handleBtn_createAttraction}>
                                            新增
                                    </Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.props.data.filter((item, index, array) => {
                                return item.id = 1
                            }).map((data, index) => {
                                console.log('data', data)
                            })}
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
        createAttractionStatus: state.CT_createAttractionBtn,
        createTravelModelStatus: state.CT_createTravelBtn,
        createTravelBtnStatus: state.CT_createTravelBtnStatus,
        createAttractionBtnStatus: state.CT_createAttractionBtnStatus,
        createTravelError_startDateNull: state.CT_createTravelError_startDateNull,
        createTravelError_endDateNull: state.CT_createTravelError_endDateNull,
        createTravelError_endDateSmall: state.CT_createTravelError_endDateSmall,
        createTravelError_titleNull: state.CT_createTravelError_titleNull,
        currentId:state.CT_currentTravelId
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
        handleBtn_createAttraction: () => {
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
