import React from "react"

import Background from "../components/background"
import City from "../components/city"

const tallStyle = {
  height: 3000,
  overflow: 'scroll',
  position: 'relative'
}

const pageBreak = {
  height: 600,
  backgroundColor: 'rgba(255,255,255,.7)',
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 690,
  borderRadius: 20
}

const ArtPage = () => (
  <div>
  <Background>

  </Background>

  <div style={tallStyle}>
    <div style={pageBreak} />
    <City />
  </div>
  </div>
)

export default ArtPage
