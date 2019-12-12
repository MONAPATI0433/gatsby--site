
    import React, { Component } from 'react'
    import Layout from "../components/layout"
    import { Link } from "gatsby"
    import { Container, Row, Card,Col } from "react-bootstrap"
    import image3 from '../images/bg-academic-p.jpg'
    import image4 from '../images/Update-file_academic.png'

    // import Img from "gatsby-image"
    // import { useStaticQuery, graphql } from "gatsby"
    class ACADEMICINSTITUTIONS extends Component {
        render() {
            return (
                <div>
                    <Layout location={this.props.location}>
                        <img src={image3} style={{ height: "300px", width: "100%" }} />
                        <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                            <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/consulting" style={{ color: "white" }}>&nbsp;Consulting /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;Academic Institutions</Link></p>
                        </div>
                        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>Academic Institutions</h2>
                        <Container style={{marginTop:"-70px"}}>
                            <Row>
                            <Col md={6}>
                            <img src={image4} style={{width:"100%",height:"400px"}} />
                            </Col>
                            <Col md={6}>
                                <p className="normal-para">
                                AI promises to unlock unprecedented benefits for businesses and transform human lives – a radical transformation that 
                                will play out in our professional and personal lives as well.  AI careers will be in great demand as students and working 
                                professionals flock to learn academic programs in related disciplines to match the burgeoning demand and build their 
                                careers.
                                </p>
                                <p className="normal-para">
                                As the demand for an education in AI grows rapidly, the growth in the supply side of<strong>AI led programs and 
                                disciplines</strong>  has remained sub optimal. How do academic institutions cope with the need to educate the future 
                                workforce in this transformational area?
                                </p>
                                <p className="normal-para">We have been associated with several academic institutions as a strategic AI partner and consultant.  AIQRATE is an 
                                    ideal partner to counsel public and private academic institutions through their transformation journey in <strong>introducing AI 
                                    as a pivotal part of the education program</strong> they impart. This requires an overall ecosystem build up 
                                    including<strong>curating topical curriculums, AI awareness sessions, augmenting industry connect and re-skilling 
                                    academia</strong></p>
                                    <p className="normal-para">AIQRATE Consulting offerings for the academic institutions:</p>
                                    </Col>
                            </Row>
                        </Container>
                        <div className="container">
                        <h5>Videos</h5>
                                <hr style={{height:"3px",backgroundColor:"black"}}></hr>
                            <div className="row">
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/RlqSW4g-O24"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/Qq4jKY9e_2o"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/MkggmSChVlk"></iframe>
                                </Col>
                            </div>
                            <div className="row">
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/1kaWr3DMjWk"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/LunTP7ty13o"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/JWKkJOskaaQ"></iframe>
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
    export default ACADEMICINSTITUTIONS