import React from "react"

class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorR: "0",
      colorG: "191",
      colorB: "255",
      colorR2: "52",
      colorG2: "214",
      colorB2: "237",
      windowHeight: 500,
      documentHeight: 500,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, 10)
    this.setState({
      windowHeight: document.documentElement.clientHeight,
      documentHeight: document.documentElement.offsetHeight,
    })
  }

  updateColor(c) {
    const color1 = 9.9 * c + -0.0968 * c ** 2
    const color2 = 191 + -2.07 * c + 0.0026 * c ** 2
    const color3 = 255 + -5.04 * c + 0.032 * c ** 2
    const color4 = 53 + 8.55 * c + -0.0804 * c ** 2
    const color5 = 214 + 3.08666 * c + -0.048266 * c ** 2
    const color6 = 237 + -5.40666 * c + 0.035466 * c ** 2
    this.setState({
      colorR: color1,
      colorG: color2,
      colorB: color3,
      colorR2: color4,
      colorG2: color5,
      colorB2: color6,
    })
  }

  handleScroll(e) {
    const totalScroll = this.state.documentHeight - this.state.windowHeight
    const yCol = Math.floor(
      (e.target.documentElement.scrollTop / totalScroll) * 100
    )

    this.updateColor(yCol)
  }

  render() {
    const linearGradient =
      "linear-gradient(to bottom right, rgb(" +
      this.state.colorR +
      ", " +
      this.state.colorG +
      ", " +
      this.state.colorB +
      ")," +
      " rgb(" +
      this.state.colorR2 +
      "," +
      this.state.colorG2 +
      "," +
      this.state.colorB2 +
      ") 80%)"
    var style = {
      backgroundImage: linearGradient,
      height: "100%",
      width: "100%",
      position: "fixed",
    }
    return <div style={style}>{this.props.children}</div>
  }
}

export default props => <Background>{props.children}</Background>
