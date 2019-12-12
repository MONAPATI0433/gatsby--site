import React, { Component } from 'react'
import Layout from "../components/layout"
import { Col, Container, Row, Media } from 'react-bootstrap'
import './contact.css'

import {
  FaChessQueen
} from "react-icons/fa"
class contactUs extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{
          backgroundColor: "#000000", width: "100%", height: "50px",
          lineHeight: '1.3rem'
        }}>
          <h5 className="text-center" style={{ color: "#c3baba", fontWeight: "robot", position: "relative", top: "15px", fontSize: '16px' }}>
            <span className="text-white" style={{ fontWeight: "bold" }}>
              THANKS&nbsp;&nbsp;
                          </span>
            FOR YOUR INTEREST. HOW CAN WE HELP?
                          </h5>
        </div>

        <div className="mb-5" style={{backgroundColor: "#f4f4f4",height:"200px"}}>
          <Row>
            <Col className="mt-5 ml-5">
              <Media>
                <FaChessQueen />
                <Media.Body>
                  <p className="mt-2" >BECOME THE<br></br>
                    CLIENT</p>
                  <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                </Media.Body>
              </Media>
            </Col>
            <Col className="mt-5">
              <Media>
                <FaChessQueen />
                <Media.Body>
                  <p className="mt-2 normal-para">SET UP DEEP DIVE ADVISORY SESSION</p>
                  <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                </Media.Body>
              </Media>
            </Col>
            <Col className="mt-5">
              <Media>
                <FaChessQueen />
                <Media.Body>
                  <p className="mt-2 normal-para">PARTNER WITH<br></br>
                    US</p>
                  <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                </Media.Body>
              </Media>
            </Col>
            <Col className="mt-5">
              <Media>
                <FaChessQueen />
                <Media.Body>
                  <p className="mt-2 normal-para">PRESS<br></br>
                    ENQUIRIES</p>
                  <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </div>
        <Container className="mt-5 mb-3 text-center">
          <Row>
            <div className="text-center">
              <h4><strong>BECOME </strong>THE CLIENT</h4>
              <p className="normal-para" style={{ fontSize: "14px" }}>Please leave your details with us with your query and we will get in touch with you swiftly. Alternatively, please reach directly over call or WhatsApp our Chief Client Officer , Rohan @</p>
              <p className="normal-para" style={{ fontSize: "14px" }}>+91  9818002307</p>
            </div>
          </Row>
        </Container>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="form-group">
                <input type="text" id="name" className="form-control" required />
                <label className="form-control-placeholder" htmlFor="name">Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" className="form-control" required />
                <label className="form-control-placeholder" htmlFor="Email">Email</label>
              </div>
              <div className="form-group">
                <input type="jobtitle" id="jobtitle" className="form-control" required />
                <label className="form-control-placeholder" htmlFor="jobtitle">Job Title</label>
              </div>
              <div className="form-group">
                <input type="company" id="company" className="form-control" required />
                <label className="form-control-placeholder" htmlFor="company">Company Nmae</label>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <input type="country" id="country" className="form-control" required />
                    <label className="form-control-placeholder" htmlFor="country">Country</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input type="phone" id="phone" className="form-control" required />
                    <label className="form-control-placeholder" htmlFor="phone">Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea name="msg" id="msg" class="form-control" placeholder="Write your message" cols="30" rows="4" required></textarea>
                <div className="text-center">
                  <button className="btn btn-primary mt-4 btn-lg text-center">Submit</button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="normal-para" style={{ fontSize: "12px", fontStyle: " italic" }}>By submitting your details, you are consenting to <strong>AIQRATE</strong> advisory & consulting sending you further email communications about latest advisory services, consulting offerings and<strong>AIQRATIONS</strong>  which may interest you. To learn more on this topic, please read our privacy policy.</p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#f4f4f4", height: "400px" }}>
          <div className="col-12 ml-5 mt-5">
            <div className="row">
              <div className="col-4">
                <div className="card mt-5" style={{ width: '18rem' }}>
                  {/* <img className="card-img-top" src=".../images/analytics.png" alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title text-center">SET UP DEEP DIVE ADVISORY SESSION</h5>
                    <p className="card-text normal-para text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="text-center normal-para"><strong>Chief Client Officer, Rohan</strong></p>
                    <p className="text-center normal-para">+91 9818002307</p>
                    <p className="text-center normal-para "><a href="">abc@aiqrate.ai</a></p>
                  </div>
                </div>

              </div>
              <div className="col-4">
                <div className="card mt-5" style={{ width: '18rem' }}>
                  {/* <img className="card-img-top" src=".../images/analytics.png" alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title text-center">PARTNER WITH US</h5>
                    <p className="card-text normal-para text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="text-center normal-para"><strong>Chief Technology Officer, NK</strong></p>
                    <p className="text-center normal-para">+91 9818002307</p>
                    <p className="text-center normal-para"><a href="">abc@aiqrate.ai</a></p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card mt-5" style={{ width: '18rem', }}>
                  {/* <img className="card-img-top" src=".../images/analytics.png" alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title text-center">PRESS ENQUIRIES</h5>
                    <p className="card-text normal-para text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="text-center normal-para"><strong>CEO, Sameer</strong></p>
                    <p className="text-center normal-para">+91 9818002307</p>
                    <p className="text-center normal-para"><a href="" style={{Color:"#0E76BC"}}>abc@aiqrate.ai</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default contactUs