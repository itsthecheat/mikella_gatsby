import React from 'react'
import { graphql } from 'gatsby'
import SliceZone from '../components/SliceZone'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  return (

    <Layout>
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String){
    prismic {
      allPages(uid: $uid) {

      }
    }
  }
`

export default Page
