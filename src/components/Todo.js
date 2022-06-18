import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(task){
    // it is a react hook.
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const deleteTask = () => {
        setModalIsOpen(true);
    } 

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }


    return (
        <div className='todo-card'>
            <h2>{task.title}</h2>
            <p>{task.text}</p>
            <div className='action'>
                <button className='btn' onClick={() => deleteTask()}>Delete</button>
            </div>
            
            { modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/> }
            { modalIsOpen && <Backdrop onCancel={() => closeModalHandler()}/> }
        </div>
    );
}
export default Todo;