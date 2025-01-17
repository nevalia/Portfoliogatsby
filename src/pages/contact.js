import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>stay connected</h3>
        <form action="https://formspree.io/meqrglak" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control"/>
            <input type="email" name="email" placeholder="email" className="form-control"/>
            <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            <button type="submit" className="submit-btn btn">Submit</button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
