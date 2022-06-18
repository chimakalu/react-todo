import React from "react";

function Modal(task){

    function cancelHandler(){
        task.onCancel();
    }

    function confirmHandler(){
        task.onCancel();
    }

    return (<div className="modal">
        <p>Are you sure?</p>
        <div>
            <button className="btn btn-cancel" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    </div>);
}

export default Modal;