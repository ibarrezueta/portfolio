import React from 'react'
import { Link } from "gatsby"
import styles from "./background.module.css"

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const PageLink = props => (
  <Link className={styles.links} to={props.id}> {props.name} </Link>
)

class NavBar extends React.Component{
  render(){
    return (
      <div style={{position: 'fixed', width: '100%', display:'flex', justifyContent: 'flex-end', height: 65, zIndex: 10, }}>
      <PageLink name="About Me" id="#aboutme"/>
      <PageLink name="My Work" id="#mywork"/>
      </div>
    );
  }
}

export default NavBar
