'use client'
import React, { useRef } from 'react';

export default AddItemButton

type AddItemButtonProps = {
    createTypeName: string;
}

function AddItemButton({ createTypeName }: Readonly<AddItemButtonProps>) {

    const ref = useRef(null);

    const handleOpen = () => {
        ref.current.showModal();
    };

    const handleClose = () => {
        ref.current.close();
    };


    return (
        <>
            <button className="btn btn-circle rounded-full w-12 h-12 flex items-center justify-center"
                title={`Create ${createTypeName}`}
                aria-label={`Create ${createTypeName}`}
                onClick={handleOpen}>
                <span className="text-2xl">+</span>
            </button >
            <dialog ref={ref} id="createItemModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create New {createTypeName}</h3>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">What do you need to do?</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
