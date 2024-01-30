// Modal.js

import React from 'react';

const Modal = (props) => {
    const { isOpen, onClose, content } = props;

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`} >
            <div
                className="bg-black bg-opacity-30 fixed inset-0"
                onClick={onClose}></div>
            <div className="relative bg-white p-8 rounded-md z-50 max-w-[500px]">
                <span className="cursor-pointer absolute top-4 right-4 text-xl" onClick={onClose}>&times;</span>
                <h1 className='text-3xl font-bold mb-2'>{content.title}</h1>
                <p className='text-lg font-light'>{content.desc}</p>
            </div>
        </div>
    );
};

export default Modal;
