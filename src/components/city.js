import React from "react"
import Building from "./building"


const City = props => (
  <div>
    <Building height={"150px"} width={"40px"} xCord={0}/>
    <Building height={"270px"} width={"40px"} xCord={30}/>
    <Building height={"180px"} width={"40px"} xCord={70}/>
    <Building height={"350px"} width={"40px"} xCord={90}/>
    <Building height={"370px"} width={"40px"} xCord={120}/>
    <Building height={"190px"} width={"40px"} xCord={160}/>
    <Building height={"300px"} width={"40px"} xCord={190}/>
    <Building height={"160px"} width={"40px"} xCord={220}/>
    <Building height={"220px"} width={"40px"} xCord={260}/>
  </div>
)

export default () => <City />
