import React from "react"
import Building from "./building"


const City = props => (
  <div>
    <Building height={"250px"} width={"90px"} xCord={0}/>
    <Building height={"290px"} width={"90px"} xCord={280}/>
    <Building height={"450px"} width={"80px"} xCord={190}/>
    <Building height={"470px"} width={"90px"} xCord={80}/>
    <Building height={"370px"} width={"90px"} xCord={260}/>
    <Building height={"280px"} width={"90px"} xCord={170}/>
    <Building height={"320px"} width={"90px"} xCord={430}/>
    <Building height={"500px"} width={"90px"} xCord={360}/>
    <Building height={"260px"} width={"70px"} xCord={520}/>
  </div>
)

export default () => <City />
