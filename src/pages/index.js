import React from "react"
import Background from "../components/background"
import NavBar from "../components/nav-bar"
import Image from "../components/image"
import Image2 from "../components/image2"
import resume from "../images/Resum8.pdf"
import styles from "../components/background.module.css"
import SEO from "../components/seo"


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
      borderBottom: "100vw solid rgba(40,40,255,.07)",
      borderLeft: "100vw solid transparent",
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

    <a
      style={{ position: "absolute", right: "20%", top: "40%", zIndex: 5 }}
      href={"https://www.linkedin.com/in/isaac-barrezueta/"}
    >
      {" "}
      My LinkedIn
    </a>
    <ResumeButton />
    <div style={{height: "300vh", position:"relative"}}>
      <div style={{paddingTop: "50vw"}}>
        <h1 style={{marginLeft: "5em"}} id="aboutme"> About Me </h1>
        <p style={{marginLeft: "12em", marginRight: "12em"}}>
          I'm a Senior in Allegheny College with interests in Art, Music, and Computer Science.
        </p>
      </div>
      <h1 style={{marginLeft: "5em"}} id="mywork"> My Projects </h1>
      <p style={{marginLeft: "12em", marginRight: "12em"}}>
        My most recent project, <a href="https://github.com/barrezuetai/synesthesia">Synesthesia</a>, involves using Processing, a Java based langauge
        and software, and Ableton Live in order to create art based on midi inputs.
        Below are some pieces I was able to make using the program.
      </p>
      <Image/>
      <Image2/>

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
