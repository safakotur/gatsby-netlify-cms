import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article
                className={`blog-post-single ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >

                <div className="blog-post-holder">
                  <div className="blog-post-content">
                    <h2>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <div>
                      {post.frontmatter.date}
                    </div>
                    <p>{post.excerpt}</p>
                    <Link className="btn-primary" to={post.fields.slug}>Keep Reading</Link>
                  </div>

                  {post.frontmatter.featuredimage ? (
                    <div className="blog-post-image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </div>


              </article>
            </div>
          ))
        }
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 290, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
