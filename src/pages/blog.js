import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
// import Button from "../components/button"
import image3 from '../images/bg-BeingAI-p.jpg'
import image4 from '../images/bg-aiqrations-p.jpg'
import Pagination from 'react-bootstrap/Pagination'
// import PaginationLink from '../components/PaginationLink'
import "./main.css"

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    // const postsPerPage = 2;
    // let numberOfPages

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img src={image4} alt="no image" style={{ height: "300px", width: "100%" }} />
        <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
          <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/" style={{ color: "white" }}>&nbsp;AIQRATIONS</Link></p>
        </div>
        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>AIQRATIONS</h2>

        <SEO title="All posts" />
        {/* <Bio /> */}
        <div className="container mr-5  d-flex">
          <div className="row">
            <p>AIQRATE team has an extensive line up of knowledge content, insights & opinions, reports and analysis in AI built over the years.  We are industry builders as well as key opinion leaders in AI and have been associated with several Enterprises, GCCs, SMBs, Startups, VC/PE firms, Academic Institutes and Business Associations advising and consulting with them on their AI strategies, interventions, programs and engagements.</p>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              // numberOfPages = Math.ceil(data.allMdx. totalCount / postsPerPage)
           
              return (
                <div className="blog" style={{ border: "3px solid #f4f4f4", marginTop: "40px", width: "30%", marginLeft: "5px", height: "420px", }}>
                  <img src={image3} alt="no image" style={{ height: "150px", width: "100%" }} />
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link> */}
        <div className="mt-5 ml-3" >
          <Pagination size="md">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination size="md">{items}</Pagination>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>

        {/* <PaginationLink currentPage={1} numberOfPages = {numberOfPages} /> */}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      ){
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
