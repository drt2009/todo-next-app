'use client'
import React, { useRef } from 'react';

export default AddItemButton

type AddItemButtonProps = {
    createTypeName: string;
}

function AddItemButton({ createTypeName }: Readonly<AddItemButtonProps>) {

    const modalRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null)

    const handleOpen = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleClose = (event: React.FormEvent) => {
        event.preventDefault();
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();

        const postData = new FormData();
        postData.append('description', event.target.todoDescription.value);

        fetch('http://localhost:8080/todo', {
            method: 'POST',
            body: postData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
            })
            .catch((error) => {
                // Handle any errors
            });

        if (modalRef.current) {
            modalRef.current.close();
        }

        if (formRef.current) {
            formRef.current.reset();
        }
    }


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
                        <button className="btn" onClick={handleClose}>Close</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}
