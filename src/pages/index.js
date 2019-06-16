import React from "react"

import Background from "../components/background"
import NavBar from "../components/nav-bar"
import Image from "../components/image"
import resume from "../images/resuMAY.pdf"

import styles from "../components/background.module.css"

const tallStyle = {
  height: 3000,
  zIndex: 2,
  position: 'relative',

}

const PageBreak = (props) => {
  const leftStyle = {
    height: 400,
    backgroundColor: 'rgba(255,255,255,.38)',
    width: '64%',
    zIndex: 1,
    marginLeft: '34%',
    position: 'relative',

    boxShadow: "0 5px 10px rgba(54,60,85,.5)",
    paddingTop: 100
  };

  const rightStyle = {
    height: 400,
    backgroundColor: 'rgba(255,255,255,.38)',
    width: '50%',
    zIndex: 1,
    marginLeft: '2%',
    position: 'relative',

    boxShadow: "0 5px 10px rgba(54,60,85,.5)",
    paddingTop: 100
  };

  var chosenStyle = rightStyle;

  if (props.type === 'left'){
    chosenStyle = leftStyle
  }
  return(
    <div style={chosenStyle} id={props.id}
    />
  )
}

const Footer = () => (
  <div>
  <div style={{
    position: 'absolute',
    width: 0,
    height: 0,
    borderBottom: '280px solid rgba(40,140,55,.7)',
    borderRight: '800px solid transparent',
    zIndex: 3,
    bottom: 0
  }}/>
  <div style={{
    position: 'absolute',
    width: 0,
    height: 0,
    borderBottom: '180px solid rgba(40,90,155, .9)',
    borderLeft: '800px solid transparent',
    zIndex: 3,
    bottom: 0,
    right: 0
  }}/>
  </div>
)

const Triangle = () => (
  <div style={{
    width: 0,
    height: 0,
    borderBottom: '680px solid rgba(40,40,255,.07)',
    borderLeft: '1200px solid transparent',
  }} />
)

const ResumeButton = () => (
  <a className={styles.resume} href={resume}>
  resume
  </a>

)

const ArtPage = () => (
  <div>

  <Background>
      <Triangle />
  </Background>
  <NavBar />
  <Image />
  <a style={{position: 'absolute', right: '20%', top: '40%', zIndex: 5}}href={'https://www.linkedin.com/in/isaac-barrezueta/'} id="sayhello"> My LinkedIn</a>
  <ResumeButton/>
  <div style={tallStyle}>
    <div className={styles.empty} />
    <div className={styles.empty} />
    <div className={styles.empty} />
    <div className={styles.empty} />
    <div className={styles.empty} />
    <PageBreak type='left' id="aboutme"/>
    <div className={styles.empty} />
    <div className={styles.empty} />
    <div className={styles.empty} />
    <div className={styles.empty} />
    <PageBreak type='right' id="mywork"/>

    <Footer/>
    <div style={{
      position: 'absolute',
      zIndex: 5,
      bottom: 0,
      right: 20
    }}/>

  </div>




  </div>
)

export default ArtPage
