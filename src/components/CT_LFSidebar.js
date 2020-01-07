import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

import { connect } from "react-redux"; //react 組件 與 store 連接
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faSubway, faTrain, faPlane, faShoePrints, faShip, faTaxi, faCarSide, faChair } from '@fortawesome/free-solid-svg-icons';

 class CT_LFSidebar extends Component {
    render() {
        const data = this.props.data;
        console.log('aaa', data)
        return (
            <div>
                <Container fluid='true' style={{ borderStyle: 'solid', borderWidth: '0.5px', width: '100%' }}>
                    
                <Row>
                        
                        </Row>
                    <Row>
                        <Col lg='3' style={{ borderStyle: 'solid', borderWidth: '0 0.5px 0 0', padding: '0 0' }}>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {data.id.substr(3, 2)}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                10:30
                            </div>
                        </Col>
                        <Col lg='9' style={{ padding: '0 0' }}>
                            <div>
                               {data.placeName}
                            </div>
                            <div align='right'>
                            <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
                                {
                                    (data.stayTime>60)?Math.floor(data.stayTime/60)+'小時'+data.stayTime%60+ '分鐘': data.stayTime+'分鐘'
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12' style={{ borderStyle: 'solid', padding: '0 0', borderWidth: '0.5px 0 ' }}>
                            <div align='right'>
                            <FontAwesomeIcon icon={faShoePrints}></FontAwesomeIcon>
                           
                            {    
                            // (data.pathData.traffic === 'bus')? <FontAwesomeIcon icon={faBus}></FontAwesomeIcon>: null
                           
                            // (data.pathData.traffic === 'subway')? <FontAwesomeIcon icon={faSubway}></FontAwesomeIcon>:null
                           
                            // (data.pathData.traffic === 'taxi')? <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>:null 
                            
                            // (data.pathData.traffic === 'car')? <FontAwesomeIcon icon={faCarSide}></FontAwesomeIcon>:null
                            
                            // (data.pathData.traffic === 'train')? <FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>:null
                           
                            // (data.pathData.traffic === 'plane')? <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>:null
                           
                            // (data.pathData.traffic === 'walk')? <FontAwesomeIcon icon={faShoePrints}></FontAwesomeIcon>:null
                           
                            // (data.pathData.traffic === 'ship')? <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>:null
                            
                            }   
                                  {
                                    (data.pathData.pathTime>60)?Math.floor(data.pathData.pathTime/60)+'小時'+data.pathData.pathTime%60+ '分鐘': data.pathData.pathTime + '分鐘'
                                }
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => { //store裡面的state
    return {
        titleInput: state.CT_titleInput,
        startDateInput: state.CT_startDateInput,
        endDateInput: state.CT_endDateInput,
    }
}

export default connect(mapStateToProps)(CT_LFSidebar)