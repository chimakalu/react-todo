import React from "react";

function Backdrop(task){
    return (<div className="backdrop" onClick={task.onCancel}/>)
}

export default Backdrop;