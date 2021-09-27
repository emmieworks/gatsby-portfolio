import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/_contact.module.scss"
import * as button from "../styles/_button.module.scss"

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact</h2>
        <p style={{padding: `1rem`}}>お仕事のご相談・ご依頼はお問い合わせフォームからどうぞ</p>
        <a href="https://0forest.com/contact" className={`${button.btn} ${button.white}`}>お問い合わせ</a>
      </div>
      <div className={styles.back}>
        <StaticImage
          src="../images/bg-contact.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          style={{height : "100%"}}
        />
      </div>
    </section>
  )
}
export default Contact
