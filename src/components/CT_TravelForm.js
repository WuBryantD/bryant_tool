import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import moment from 'moment';
import CostForm from './CT_CostForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from "react-redux"; //react 組件 與 store 連接
import { handelSelect_CT_createTravel_Days } from '../actions';

export class CT_TravelForm extends Component {
    render() {
        let startDateStr = this.props.data[this.props.currentId - 1].startDate;
        let endDateStr = this.props.data[this.props.currentId - 1].endDate;
        let newStartDate = new Date(startDateStr.split("-")[1] + '/' + startDateStr.split("-")[2] + '/' + startDateStr.split("-")[0]);
        let newEndDate = new Date(endDateStr.split("-")[1] + '/' + endDateStr.split("-")[2] + '/' + endDateStr.split("-")[0]);
        let days = parseInt(Math.abs(newEndDate - newStartDate) / 1000 / 60 / 60 / 24); //同天 = 0 
        let unixTimestamp = moment(newStartDate, 'YYYY/MM/DD').valueOf() / 1000;
        let dayArr = []
        for (let i = 0; i <= days; i++) {
            let day = i + 1
            if (i === 0) {
                dayArr.push({
                    id: i + 1,
                    date: unixTimestamp,
                    content: 'Day' + day
                })
            } else {
                dayArr.push({
                    id: i + 1,
                    date: dayArr[i - 1].date + 86400,
                    content: 'Day' + day
                })
            }
        }

        return (
            <div >
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.5rem' }}>
                    景點 {this.props.attractionId}
                </div>
                <Container style={{ backgroundColor: '#CCEEFF', borderWidth: '0.5px', fontSize: '0.85rem' }}>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            規劃日
                        </Col>
                        <Col sm='9' lg='10'>
                            <select style={{ borderRadius: '10px' }} value={this.props.daySelect} onChange={this.props.handleDaySelect}>
                                {dayArr.map((data, index) => {
                                    return <option key={index} value={data.id}>{data.content}</option>
                                })}

                            </select>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            開始時間
                                </Col>
                        <Col sm='9' lg='10'>

                            <input type='time' ></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2' >
                            景點名稱
                        </Col>
                        <Col sm='9' lg='10'>
                            <input type='text' style={{ borderRadius: '10px', borderStyle: 'solid', borderColor: 'lightgray' }} placeholder='請輸入景點名稱'></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            地址
                        </Col>
                        <Col sm='9' lg='10'>
                            <input type='text' style={{ borderRadius: '10px', width: '100%', borderStyle: 'solid', borderColor: 'lightgray' }} placeholder='請輸入地址'></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            停留時間
                                </Col>
                        <Col sm='9' lg='10'>
                            <input type='text' style={{ borderRadius: '5px', width: '1.5rem', borderStyle: 'solid', borderColor: 'lightgray' }}></input>小時
                                <input type='text' style={{ borderRadius: '5px', width: '1.5rem', borderStyle: 'solid', borderColor: 'lightgray' }}></input>分鐘
                                </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2' >
                            景點資訊
                        </Col>
                        <Col xs='12' sm='9' lg='10'>
                            <Row>
                                <Col xs='5' md='3' lg='3' >
                                    <input type='checkbox'></input>門票
                        </Col>
                                <Col xs='5' md='3' lg='3' >
                                    <input type='checkbox'></input>附近餐廳
                        </Col>
                                <Col xs='5' md='3' lg='3' >
                                    <input type='checkbox'></input>車位
                        </Col>
                                <Col xs='5' md='3' lg='3' >
                                    <input type='checkbox'></input>攜帶寵物
                        </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            有無消費
                                </Col>
                        <Col sm='9' lg='10'>
                            <input type='radio' ></input>無  &nbsp; <input type='radio' ></input>有
                                </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            交易明細
                        </Col>
                        <Col sm='9' lg='10'>
                            <CostForm />
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col sm='3' lg='2'>
                            紀錄
                                </Col>
                        <Col sm='9' lg='10'>
                            <textarea type='text' placeholder='說說您對景點的看法' style={{ resize: 'none', width: '14rem', height: '5rem' }}  ></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='3' lg='2'>新增圖片
                                </Col>
                        <Col sm='9' lg='10'>
                            <Button size='sm'>上傳圖片</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button size='sm' style={{ borderStyle: 'none' }} ><FontAwesomeIcon icon={faPlus} /> 新增景點</Button>
                                &nbsp;
                            <Button size='sm' style={{ backgroundColor: 'red', borderStyle: 'none' }}><FontAwesomeIcon icon={faTimes} /> 刪除此景點</Button>
                            </div>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        attrationsData: state.attrationsData,
        currentId: state.CT_currentTravelId,
        data: state.CT_data,
        daySelect: state.CT_daySelect,
        attractionId:state.CT_currentAttractionId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDaySelect: (val) => {
            dispatch(handelSelect_CT_createTravel_Days(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CT_TravelForm)
