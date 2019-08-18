import React from "react"
import Background from "../components/background"
import NavBar from "../components/nav-bar"
import Image from "../components/image"
import resume from "../images/Resum8.pdf"
import styles from "../components/background.module.css"
import SEO from "../components/seo"

const tallStyle = { height: 3000, zIndex: 2, position: "relative" }

const PageBreak = props => {
  const leftStyle = styles.leftStyle
  const rightStyle = styles.rightStyle
  var chosenStyle = rightStyle

  if (props.type === "left") {
    chosenStyle = leftStyle
  }

  return <div className={chosenStyle} id={props.id} />
}

const Footer = () => (
  <div>
    <div className={styles.triangle1} />
    <div className={styles.triangle2} />
  </div>
)

const Triangle = () => (
  <div
    style={{
      width: 0,
      height: 0,
      borderBottom: "680px solid rgba(40,40,255,.07)",
      borderLeft: "1200px solid transparent",
    }}
  />
)

const ResumeButton = () => (
  <a className={styles.resume} href={resume}>
    resume
  </a>
)

const ArtPage = () => (
  <div>
    <SEO title="Isaac Barrezueta's Portfolio" />

    <Background>
      <Triangle />
    </Background>
    <NavBar />
    <Image />
    <a
      style={{ position: "absolute", right: "20%", top: "40%", zIndex: 5 }}
      href={"https://www.linkedin.com/in/isaac-barrezueta/"}
      id="sayhello"
    >
      {" "}
      My LinkedIn
    </a>
    <ResumeButton />
    <div style={tallStyle}>
      <div className={styles.empty} />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <PageBreak type="left" id="aboutme" />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <div className={styles.empty} />
      <PageBreak type="right" id="mywork" />

      <Footer />
      <div
        style={{
          position: "absolute",
          zIndex: 5,
          bottom: 0,
          right: 20,
        }}
      />
    </div>
  </div>
)

export default ArtPage
