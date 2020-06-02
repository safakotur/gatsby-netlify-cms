import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section-holder">
          <div className="section blog-posts">
            <div className="container">
              <div className="section-title">
                <h1>Latest Stories</h1>
              </div>
              <BlogRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
