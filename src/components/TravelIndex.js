import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import CreateTravel from './CreateTravel'
import LFSidebar from './CT_LFSidebar'

export class TravelIndex extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row style={{ height: '100%' }}>
            <Col xs='false' lg='2' style={{ backgroundColor: 'gray', color: 'white', borderStyle: 'solid', borderWidth: '0 0.5px', borderColor: 'black', padding: '1px 1px' }} >
              {/* {this.props.createDate.map((data,index) => {
                return (
                  data.travelData.map((data, index) => {
                    return <LFSidebar key={index} data={data} />
                  })
                )
              })} */}
            </Col>
            <Col xs='12' lg='10' style={{ borderStyle: 'solid', borderWidth: '0 0.5px 0 0 ' }}>
              <CreateTravel data={this.props.createDate} />
              {/* <Card /> */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  createDate: state.CT_data
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TravelIndex)
