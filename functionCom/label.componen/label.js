import React from "react";

function LabelName(props){

    return(
        <>
        <div className="label-wapper">
            <label style={{color:"whitesmoke"}}>{props.name}</label>
        </div>
        </>
    )
}
export default LabelName;