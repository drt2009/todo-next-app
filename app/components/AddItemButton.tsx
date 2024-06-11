import React from 'react';

export default AddItemButton

type AddItemButtonProps = {
    createTypeName: string;
    handleOpen: FunctionName;
    handleClose: FunctionName;
    handleSubmit: FunctionName;
    modalRef: RefObject<HTMLDialogElement>;
    formRef: RefObject<HTMLFormElement>;
}

function AddItemButton({ createTypeName, handleOpen, handleClose, handleSubmit, modalRef, formRef }: Readonly<AddItemButtonProps>) {
    return (
        <>
            <button className="btn btn-circle rounded-full w-12 h-12 flex items-center justify-center"
                title={`Create ${createTypeName}`}
                aria-label={`Create ${createTypeName}`}
                onClick={handleOpen}>
                <span className="text-2xl">+</span>
            </button >
            <dialog ref={modalRef} id="createItemModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create New {createTypeName}</h3>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What do you need to do?</span>
                            </div>
                            <input type="text" name="todoDescription" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn m-2" onClick={handleClose}>Close</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}
