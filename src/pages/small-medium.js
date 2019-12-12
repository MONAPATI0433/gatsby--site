
    import React, { Component } from 'react'
    import Layout from "../components/layout"
    import { Link } from "gatsby"
    import { Container, Row, Card,Col } from "react-bootstrap"
    // import image3 from '../images/bg-SMBs-P.jpg'
    import image4 from '../images/Update-file_SMB.png'

    // import Img from "gatsby-image"
    // import { useStaticQuery, graphql } from "gatsby"
    class SMALLMEDIUM extends Component {
        render() {
            return (
                <div>
                    <Layout location={this.props.location}>
                        {/* <img src={image3} style={{ height: "300px", width: "100%" }} /> */}
                        <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                            <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/consulting" style={{ color: "white" }}>&nbsp;Consulting /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;Small & Medium Sized Businesses (SMBs)</Link></p>
                        </div>
                        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>Small & Medium Sized Businesses (SMBs)</h2>
                        <Container style={{marginTop:"-70px"}}>
                            <Row>
                                {/* <Col md={10}> */}
                                <p>
                                AI adoption is not just restricted to large enterprises now, it is also an excellent lever to achieve tremendous growth for 
                                SMBs as well.
                                </p>
                                <p>
                                There is a belief that AI requires considerable investment. Fortunately, for SMBs on a budget, one doesn’t need to 
                                break the bank to start incorporating AI into their operations. By picking the low hanging fruits of the business and 
                                leveraging quick to deploy<strong>AI interventions,</strong>  one can efficiently harness the capabilities of AI and improve performance 
                                metrics across different business functions.
                                </p>
                                <p>To be AI ready, SMBs need to strategize and align their AI initiatives with their strategic and operational business goals. </p>
                                <p>Through our extensive experience with SMBs, AIQRATE has a deep understanding of SMBs priorities towards revenue 
                                    enhancement, cost/bottom-line optimization and customer acquisition. AIQRATE provides consulting through<strong>bespoke 
                                    AI-led artifacts and frameworks</strong> that guide SMBs through their AI adoption journey.</p>
                                    <p>AIQRATE Consulting offerings for SMBs:</p>Update-file_SMB
                            <Col md={7}>
                            <Card className="mt-5 mb-5 mr-5">
                                    <Card.Body>
                                        <img src={image4} style={{width:"100%",height:"400px"}} />
                                    </Card.Body>
                                </Card>
                            </Col>
                                {/* </Col> */}
                                {/* <Col md={4}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search this blog"
                                            style={{
                                                height: "54px"
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="button">
                                                Search
                                        </button>
                                        </div>
                                    </div>
                                    <h5 className="mt-5">AIQRATIONS</h5>
                                    <hr></hr>
                                    <Media>
                                        <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                        <Media.Body>
                                            <p className="ml-2">
                                                AI And Societal Impact – Addressing Large, Complex Unresolved Problems With AI
                                            </p>
                                            <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                        </Media.Body>
                                    </Media>
                                    <Media>
                                        <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                        <Media.Body>
                                            <p className="ml-2">
                                                Detecting depression early with AI
                                            </p>
                                            <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                        </Media.Body>
                                    </Media>
                                    <Media>
                                        <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                        <Media.Body>
                                            <p className="ml-2">
                                                3 Ways To Human Centric AI
                                            </p>
                                            <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                        </Media.Body>
                                    </Media>
                                    <Media>
                                        <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                        <Media.Body>
                                            <p className="ml-2">
                                                Autism care with AI
                                            </p>
                                            <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                        </Media.Body>
                                    </Media>
                                    <Media>
                                        <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                        <Media.Body>
                                            <p className="ml-2">
                                                AI & Humanity – Existential Threat or Co-exist Attainability?
                                            </p>
                                            <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                        </Media.Body>
                                    </Media>
                                </Col> */}
                            </Row>
                        </Container>
                        <div className="container">
                        <h5>Videos</h5>
                                <hr style={{height:"3px",backgroundColor:"black"}}></hr>
                            <div className="row">
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/6ao7sQ-tDm0"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/nvNyatqs9rw"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/MPGfNUNzxfk"></iframe>
                                </Col>
                            </div>
                        </div>
                        {/* <Container> */}
                                <div className="row text-white "  style={{height:"200px",}}>
                                <Col md={6} style={{backgroundColor:"#419D78"}}>
                                    <div className="mt-5">
                                <p className="ml-5"><Link to="/blog" style={{color:"white"}}>AIQRATIONS</Link></p>
                                <p className="ml-5">Look at what topics were presented at past Aiqrations</p>
                                </div>
                                </Col>
                                <Col md={6} style={{backgroundColor:"#2D3047"}}>
                                <div className="mt-5">
                                <p className="ml-5">ARTICLES</p>
                                <p className="ml-5">want to present at an upcoming aiqrate? Contact us.</p>
                                </div>
                                </Col>
                                </div>
                        {/* </Container> */}
                    </Layout>
                </div>
            )
        }
    }
    export default SMALLMEDIUM