import React, { Component } from 'react'
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
 class AboutUs extends Component {
    render() {

        return (
            <div>
         <Layout location={this.props.location}>
         <div className="bg" >
             <Container>
         <h2 className=" mb-3 ml-5">Are you lost?</h2>
         <h5 className="mt-3 mb-3 ml-5">The page you were looking for couldn't be found</h5>
         <h6 className="mt-3  ml-5">You can navigate through our menu or use this search bar:</h6>
         <input  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
         </Container>
         </div>

          </Layout>
            </div>
        )
    }
}
export default AboutUs