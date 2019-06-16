import React from 'react'
import styles from "./background.module.css"

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const PageLink = props => (
  <a className={styles.links} to={props.id}> {props.name} </a>
)

class NavBar extends React.Component{
  render(){
    return (
      <div style={{position: 'fixed', width: '100%', display:'flex', justifyContent: 'flex-end', height: 65, zIndex: 10, }}>
      <PageLink name="About Me" id="#aboutme"/>
      <PageLink name="My Work" id="#mywork"/>
      <PageLink name="Say Hello" id="#sayhello"/>
      </div>
    );
  }
}

export default NavBar
