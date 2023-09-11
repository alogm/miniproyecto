import React from "react";

function SuperHost(props){
const isSuper = props.superhost;

return (
    <div>
        <h1>{props.type}</h1>
        {isSuper === true ? <p>superhost</p> : ""}

        
    </div>
)
}
export default SuperHost