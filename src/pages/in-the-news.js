import React, { Component } from 'react'
import Layout from "../components/layout"
import { Container, Row, Card,  } from "react-bootstrap"
import { Link } from "gatsby"
import image3 from '../images/bg-news-p.jpg'
import image4 from '../images/bg-aiqrations-p.jpg'

class Approach extends Component {
    render() {
        return (
            <div>
                <Layout location={this.props.location}>
                    <img src={image3} style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white " ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;In the News</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>In the Newsh</h2>
                    <Container className="mb-3">
                        <Row>
                            {/* <Col md={4}>
                                <Card style={{ width:'23%'}}>
                                    <img src={image4} alt="no image" style={{ height: "200px", width: "100%" }} />
                                    <Card.Body>
                                        <Card.Title>
                                            <p>4th December 2019</p>
                                            <h6>AIQRATE in NASSCOM Foundation’s Tech for Good Summit 2019</h6>
                                        </Card.Title>
                                        <Card.Text>
                                            Technology has the power to disrupt status quo, alter the way people live and work, rearrange value pools, and lead to...
                                         </Card.Text>
                                        <p>Read More -></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width:'23%',height: '488px' }}>
                                    <img src={image4} alt="no image" style={{ height: "200px", width: "100%" }} />
                                    <Card.Body>
                                        <Card.Title>
                                            <p>22nd November 2019</p>
                                            <h6>In the AI era, building the next generation of consulting firm: AIQRATE advisory and consulting</h6>
                                        </Card.Title>
                                        <Card.Text>
                                        – Published in www.xtechalpha.com on 22-November-2019 AI is the next frontier and some companies won’t make...
                                         </Card.Text>
                                        <p>Read More -></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width:'23%' }}>
                                    <img src={image4} alt="no image" style={{ height: "200px", width: "100%" }} />
                                    <Card.Body>
                                        <Card.Title>
                                            <p>11th November 2019</p>
                                            <h6>AIQRATE at COALESCE’19 – Goa Institute of Management</h6>
                                        </Card.Title>
                                        <Card.Text>
                                        Goa Institute of Management (GIM), organized one of its most anticipated event, the two day long Annual Data Science...
                                         </Card.Text>
                                        <p>Read More -></p>
                                    </Card.Body>
                                </Card>
                            </Col> */}
                            <div clasName="tutors-listing">
                                <div className="row card-deck">
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card " style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                <Card.Img variant="top" src={image4} />
                                                <li>
                                                    <p>4th December 2019</p>
                                                    <p>
                                                        AIQRATE in NASSCOM Foundation’s Tech for Good Summit 2019</p>
                                                    <p>Technology has the power to disrupt status quo, alter the way people live and work, rearrange value pools, and lead to...</p>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                <Card.Img variant="top" src={image4} />
                                                <li>
                                                    <p>22nd November 2019</p>
                                                    <p>In the AI era, building the next generation of consulting firm: AIQRATE advisory and consulting</p>
                                                    <p>– Published in www.xtechalpha.com on 22-November-2019 AI is the next frontier and some companies won’t make...</p>

                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                <Card.Img variant="top" src={image4} />
                                                <li>
                                                    <p>11th November 2019</p>
                                                    <p>AIQRATE at COALESCE’19 – Goa Institute of Management</p>
                                                    <p>Goa Institute of Management (GIM), organized one of its most anticipated event, the two day long Annual Data Science...</p>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                <Card.Img variant="top" src={image4} />
                                                <li>
                                                    <p>16th February 2018</p>
                                                    <p>WILEY Book Launch: AI and Analytics – Accelerating Business Decisions By Sameer Dhanrajani</p>
                                                    <p>Introducing, the first of its kind, must have primer for CxOs, executives and professionals on executing AI and Analytics...</p>

                                                </li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default Approach