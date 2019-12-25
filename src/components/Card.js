import React, { PureComponent } from 'react'
import {
    Card,
    ListGroup,
    Image,
    ListGroupItem,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkedAlt,
    faDollarSign,
    faShoePrints,
    faCalendar,
    faTicketAlt,
    faParking,
    faCheckCircle,
    faUtensils,
    faPaw,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import play from '../img/play.png'

export default class Cards extends PureComponent {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body style={{ padding: '0.25rem' }} >
                        <Card.Title style={{ fontSize: '18px', marginBottom: 0 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>咖波屋</div>
                                <div><Image style={{ width: '1.5rem' }} src={play} roundedCircle /> </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipO-IL_pUTHhiWsTryweQpIqme8JkUmhf6old2Kg=w408-h256-k-no" />

                    <ListGroup className="list-group-flush" style={{ fontSize: '10px' }}>
                        <ListGroupItem ><FontAwesomeIcon icon={faMapMarkedAlt} color='chocolate' /> &nbsp;
                        台中市西區模範街8巷
                        </ListGroupItem>
                        <ListGroupItem>
                            <div style={{ fontSize: '0.75rem' }}>景點資訊</div>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div style={{ width: '50%' }} ><FontAwesomeIcon color='darkorange' icon={faTicketAlt} /> &nbsp;門票<FontAwesomeIcon color='green' icon={faCheckCircle} /></div>
                                <div style={{ width: '50%' }}><FontAwesomeIcon icon={faParking} color='blue' /> &nbsp;停車位<FontAwesomeIcon color='green' icon={faCheckCircle} /></div>
                                <div style={{ width: '50%' }}><FontAwesomeIcon icon={faUtensils} color='gray' /> &nbsp;附近餐廳<FontAwesomeIcon color='green' icon={faCheckCircle} /></div>
                                <div style={{ width: '50%' }}><FontAwesomeIcon icon={faPaw} color='	#EE7700' /> &nbsp;攜帶寵物<FontAwesomeIcon color='red' icon={faTimesCircle} /></div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <FontAwesomeIcon color='#FFCC22' icon={faDollarSign} /><FontAwesomeIcon color='#FFCC22' icon={faDollarSign} />&nbsp;&nbsp;總花費 300元
                                      </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <Button style={{ fontSize: '8px', width: '8em', padding: '0.4em' }} variant="outline-primary" >查看明細</Button>
                                </div>
                            </div>

                        </ListGroupItem>
                        <ListGroupItem>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <FontAwesomeIcon color='red' icon={faCalendar} />&nbsp;2019/12/18  16:00
                                    </div>
                                <div>
                                    <FontAwesomeIcon icon={faShoePrints} />&nbsp;停留 1 小時 20 分鐘
                                    </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            店內商品種類很多，也有吃得可以點，很棒!
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </div>
        )
    }
}
