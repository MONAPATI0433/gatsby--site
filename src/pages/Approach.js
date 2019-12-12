// import React from "react"

// // import { Container } from "react-bootstrap"
// // import Img from "gatsby-image"
// // import SEO from "../components/seo"
// // import { useStaticQuery, graphql } from "gatsby"
// const ApproachPage = () => {

//     return(
//         <Layout>
//               Welcome
//         </Layout>
//     )
// }

// export default ApproachPage

import React, { Component } from 'react'
import Layout from "../components/layout"
import { Container} from "react-bootstrap"
import { Link } from "gatsby"
import image3 from '../images/bg-ourapproach-p.jpg'
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
 class Approach extends Component {
    render() {
    //     const data = useStaticQuery(graphql`
    //     query {
    //       Image: file(relativePath: { eq: "IOCN-HORSE.png" }) {
    //         childImageSharp {
    //           fluid(maxWidth:20) {
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //     }
    //   `)

        return (
            <div>
         <Layout location={this.props.location}>
         <img src={image3} style={{ height: "300px", width: "100%" }} />
         <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                            <p className="text-white " ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp; Our Approach</Link></p>
                        </div>
                        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}> Our Approach</h2>
         <Container>
                <h5 className="mt-5 text-blue" style={{borderLeft:'5px solid blue',}}>&nbsp;Enabling clients reimagine their decision making with AI strategy in a transformation, innovation and disruption driven 
                &nbsp;world</h5>
                <p  className="mt-5 normal-para">In today’s fast paced VUCA world, leaders face unprecedented challenges. They need to navigate through volatility while staying focused on strategy, 
                    business performance and culture.  <strong>Artificial Intelligence</strong> is fast becoming a game changing catalyst and a strategic differentiator and almost a panacea to 
                    solve large, complex and unresolved problems.  To be an <strong>AI powered organization,</strong> leaders not only need to have a broad understanding of <strong>AI strategy, </strong>
                    they need to know how and where to use it.  AIQRATE advisory services and consulting offerings are designed to enable leaders and decision makers 
                    from <strong>Enterprises, GCCs, Startups, SMBs, VC/PE firms, Public Institutions and Academic Institutions</strong> </p>
                </Container>
                <Container className="mt-5 ">
                    <h2 className="mb-5" style={{borderBottom:'3px solid yellow',width:'25%',}}><strong>WE DO </strong>THIS BY</h2>
                    {/* <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} /> */}
                    {/* <img className="mt-5" src={image3} /> */}
                    <p className="normal-para">
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables to evangelize and demystify AI 
                   strategy, scenarios 
                   </p>
                   {/* <hr></hr> */}
                   {/* <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} /> */}
                   {/* <img className="mt-5" src={image3} /> */}
                   <p className="normal-para">
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables 
                   </p>
                   {/* <hr></hr> */}
                   {/* <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} /> */}
                   {/* <img className="mt-5" src={image3} /> */}
                   <p className="normal-para">
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables 
                   </p>
                   {/* <hr></hr> */}
                   {/* <Img fluid={data.Image.childImageSharp.fluid} style={{width:'30px'}} /> */}
                   <div>
                   {/* <img className="mt-5" src={image3} /> */}
                    {/* <span style={{position:'relative',top:'15px',left:"30px"}}>
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables 
                   </span> */}
                   <p className="normal-para">
                   Crafting bespoke and contextualized AI master class workshops, 
                   immersion sessions and roundtables 
                   </p>
                   </div>
                </Container>
          </Layout>
            </div>
        )
    }
}
export default Approach