import React from 'react'
import { Link } from "gatsby"
import styles from "./background.module.css"


const PageLink = props => (
  <Link className={styles.links} to="/"> {props.name} </Link>
)

class NavBar extends React.Component{
  render(){
    return (
      <div style={{position: 'fixed', width: '100%', display:'flex', justifyContent: 'flex-end', height: 65, zIndex: 10, }}>
      <PageLink name="About Me" />
      <PageLink name="My Work" />
      <PageLink name="Say Hello" />
      </div>
    );
  }
}

export default NavBar
