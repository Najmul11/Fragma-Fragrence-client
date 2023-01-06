import React from 'react';

const ConfirmModal = ({title, message, closeModal, modalData, handleDelete, refetch, toast}) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>handleDelete(modalData, refetch, toast)} htmlFor="confirm-modal" className="btn">Delete</label>
                        <button onClick={closeModal} className="btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;