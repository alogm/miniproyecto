import React, { useState } from 'react';
import Buscador from './Buscador';


function Modal() {

    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <header className='mod'>
            <button onClick={openModal} className='in'>Whole, Finland</button>
            <button onClick={openModal} className='me'>Add Guests</button>
            <button onClick={openModal} className='fin'><span style={{ color: 'red' }} class="material-symbols-outlined">search</span ></button>
            {
                open && (
                    <div>
                        <div className="modal">
                            <h1>Edit your search</h1>
                            <div className="modal-content">
                                <Buscador></Buscador>
                                <span className="close" onClick={closeModal}><span class="material-symbols-outlined">close</span></span>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    )
}
export default Modal;