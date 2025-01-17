import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from '../components/SEO'

const About = ({
  data:{
    about:  { nodes },
  },
}) => {
  
  const{info,stack,title,image} = nodes[0]

  return (
  <Layout>
    <SEO title="About" description="webdev"/>
  <section className="about-page">
    <div className="section-center about-center">
      <Image fluid={image.childImageSharp.fluid} className="about-img"/>
      <article className="about-text">
        <Title title={title}/>
        <div className="about-stack">
          {stack.map((item)=>{
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <p>{info}</p>
      </article>
    </div>

  </section>
  </Layout>
  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
