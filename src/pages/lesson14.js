import React from "react"
import styles from "./lesson14.module.css"

const Wrapper = props => (
  <div> {props.children} </div>
)

const Lesson14 = () => (
  <Wrapper>

  <h1> This is lesson 14 </h1>
  <span className = {styles.one} />
  <span className = {styles.two} />

  </Wrapper>
)
export default Lesson14
