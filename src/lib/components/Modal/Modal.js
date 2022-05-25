import React from "react";
import './Modal.css'
import exit from '../exit.svg'

const Modal = ({isVisible, setIsVisible, children}) => {
    return (
        <div className={`modal--group ${isVisible? 'visible': 'hidden'}`}>
            <div className="modal">
                {children}
                <img className="exit" src={exit} alt="exit modal" onClick={() => setIsVisible(false)} />
            </div>
        </div>
        
    )
}

export default Modal;