import React from "react"

import Background from "../components/background"
import City from "../components/city"

const tallStyle = {
  height: 3000,
  overflow: 'scroll',
  position: 'relative'
}

const pageBreak = {
  height: 150,
  position: 'fixed',
  backgroundColor: 'rgba(255,255,255,.7)',
  width: '40%',
  marginLeft: 350,
  marginTop: 60,
  borderRadius: '70%',
  zIndex: 3
}

const ArtPage = () => (
  <div>
  <Background />
  <div style={tallStyle} />
  </div>
)

export default ArtPage
