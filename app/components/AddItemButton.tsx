'use client'
import React, { useState } from 'react';
import Modal from "./Modal";

export default AddItemButton

type AddItemButtonProps = {
    createTypeName: string;
}

function AddItemButton({ createTypeName }: AddItemButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            {/* <button className="btn btn-circle rounded-full w-12 h-12 flex items-center justify-center"
                title={`Create ${createTypeName} item`}
                aria-label={`Create ${createTypeName} item`}
                onClick={handleButtonClick}>
                <span className="text-2xl">+</span>
            </button > */}
            <Modal />
        </>
    )
}
