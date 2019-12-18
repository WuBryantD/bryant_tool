import React, { PureComponent } from 'react'
import { Card, ListGroup, Image, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faDollarSign, faShoePrints, faCalendar } from '@fortawesome/free-solid-svg-icons'
import eat from '../img/eat.PNG'

export default class Cards extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Card style={{ width: '15rem' }}>
                    <Card.Body style={{ padding: '0.25rem' }} >
                        <Card.Title style={{ fontSize: '18px', marginBottom: 0 }}>
                            <div style={{ display: 'flex',justifyContent:'space-between' }}>
                                <div>台灣咖啡</div>
                                <div><Image style={{ width: '20px' }} src={eat} roundedCircle /> </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGbqXtM29MkUwgT2s0F3sshA4P3MYO3K4MZVkYba1Uw602LByeA&s" />

                    <ListGroup className="list-group-flush" style={{ fontSize: '10px' }}>
                        <ListGroupItem ><FontAwesomeIcon icon={faMapMarkedAlt} /> &nbsp;
                            台中市南屯區文心路一段文心森林公園
                        </ListGroupItem>
                        <ListGroupItem><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}><div><FontAwesomeIcon icon={faDollarSign} /> &nbsp;Total 300元</div><div> <Button style={{ fontSize: '8px' }} variant="outline-primary" size="sm">查看明細</Button></div></div></ListGroupItem>
                        <ListGroupItem>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div><FontAwesomeIcon icon={faShoePrints} />&nbsp;停留 1 小時 20 分鐘</div>
                                <div><FontAwesomeIcon icon={faCalendar} />&nbsp;2019 / 12 / 18</div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            敘述內容
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </div>
        )
    }
}
