  import { Link } from "gatsby"
  import PropTypes from "prop-types"
  import React from "react"
  import image from '../images/aiqrate-logo-final-blackbg.png'
  import {Navbar,Nav,Container, Breadcrumb,NavDropdown} from 'react-bootstrap'
  import './header.css'
  // import { MdMail } from "react-icons/md"

  const Header = ({ siteTitle }) => (
    <div>
  <Container>
    <Navbar bg="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#home" className="text-white">
    <Link to=""><img src={image} style={{width:"100%",marginTop:"20px",height:"40px"}}/></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-4">
      <Link to=""> <Nav.Link href="#home" className="text-white mr-4" >ADVISORY</Nav.Link> </Link>
      <NavDropdown title="CONSULTING" id="basic-nav-dropdown" className="text-white mr-4" style={{color:'white'}}>
        <Link to="/pe-vc-firms"> <NavDropdown.Item  href="#link" >Venture Capital & Private Equity Firms</NavDropdown.Item> </Link>
          <Link to="/small-medium"><NavDropdown.Item href="#action/3.1">small-medium-sized-businesses-smbs</NavDropdown.Item></Link>
          <Link to="/academic-institutions"><NavDropdown.Item href="#action/3.2">academic-institutions</NavDropdown.Item></Link>
          <Link to="/public-sector-iba"><NavDropdown.Item href="#action/3.2">public-sector-institutions-business-associations</NavDropdown.Item></Link>
        </NavDropdown>
      <Link to="/blog/">
              <Nav.Link href="#link" className="text-white mr-4">AIQRATIONS</Nav.Link>
            </Link>
    
        <NavDropdown title="ABOUT US" id="basic-nav-dropdown" className="text-white mr-4" style={{color:'white'}}>
        <Link to="/Approach"> <NavDropdown.Item  href="#link" >OUR APPROACH</NavDropdown.Item> </Link>
          <Link to="/aiqrate-engagement-model"><NavDropdown.Item href="#action/3.1">AIQRATE Eng & M</NavDropdown.Item></Link>
          <Link to="/Why-we-exit"><NavDropdown.Item href="#action/3.2">Why We Exist</NavDropdown.Item></Link>
          <Link to="/aiqrate-team"><NavDropdown.Item href="#action/3.2">AIQRATE Team</NavDropdown.Item></Link>
          <Link to="/being-ai-positive"><NavDropdown.Item href="#action/3.2">Being Al +ve</NavDropdown.Item></Link>
          <Link to="/aiqrate-alliance-advisory-forum"><NavDropdown.Item href="#action/3.3">AIQRATE Alliance Advisory Forum</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="#action/3.3">In The News</NavDropdown.Item></Link>
        <Link to="/contactUs"> <NavDropdown.Item  href="#link" >Contact Us</NavDropdown.Item> </Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>

  <Container style={{marginTop:"100px",marginBottom:"-18px"}}>
      <Breadcrumb>
      <strong  className="mt-1 ml-5" style={{fontSize:'15px'}}>AI Strategy:&nbsp;</strong><Breadcrumb.Item active href="#"  className="mt-1">Transformation |</Breadcrumb.Item>
    <Breadcrumb.Item active  className="mt-1" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Innovation |
    </Breadcrumb.Item>
    <Breadcrumb.Item active className="mt-1">Disruption</Breadcrumb.Item>
  </Breadcrumb>
      </Container>
      </div>

  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: ``,
  }

  export default Header
