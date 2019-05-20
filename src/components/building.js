import React from "react"

class Building extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const buildingStyle = {
      height: this.props.height,
      width: this.props.width,
      backgroundImage: 'linear-gradient(rgba(0,0,0,.95), rgba(20,20,20,.95))',
      position: 'absolute',
      zIndex:2,
      bottom: 0,
      padding: 10,
      left: this.props.xCord
    }

    return (
      <div style={buildingStyle}> </div>
    );
  }
}

export default (props) => <Building height={props.height} width={props.width} xCord={props.xCord}></Building>
