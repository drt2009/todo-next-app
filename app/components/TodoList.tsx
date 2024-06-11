"use client"
import useSWR from 'swr';
import React, { useRef } from 'react';
import Card from "./Card";
import AddItemButton from "./AddItemButton";

export default TodoList;

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function TodoList() {


    const { data, error, mutate } = useSWR("http://localhost:8080/todo", fetcher);


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
                mutate();
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

    };



    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            {data.map((todoItem) => (
                <Card key={todoItem.id} description={todoItem.description} id={todoItem.id}></Card>
            ))}
            < AddItemButton
                createTypeName="Todo Item"
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                modalRef={modalRef}
                formRef={formRef} />
        </>
    )
}