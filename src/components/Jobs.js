import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


export const query = graphql`
  {
    
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        date
        position
        entreprise
        desc {
          id
          name
        }
      }
    }
  }
`
const Jobs = () => {
  const data =  useStaticQuery(query);
  const {allStrapiJobs : {nodes: jobs},
} = data

  const [value, setValue] = React.useState(0)
  const {entreprise, position, date, desc} = jobs [value];
 
  return (
  <section className="section jobs">
    <Title tile="experience"/>
    <div className="jobs-center">
      {/* btn container*/}
        <div className="btn-container">
          {jobs.map((item, index) =>{
              return (<button 
              key={item.strapiId}
              onClick={()=> setValue(index)}
               className={`job-btn &{index === value &&
                 "active-btn"}`}>
                   {item.entreprise}
              </button>
              )
          })}
        </div>

       {/*job info*/}
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{entreprise}</h4>
            <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
          </article>
    </div>
            <Link to ="/about" className="btn center-btn">
              more info
            </Link>
  </section>
)
}

export default Jobs