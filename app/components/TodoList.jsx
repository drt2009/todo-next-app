"use client"
import useSWR from 'swr';
import Card from "./Card";
import AddItemButton from "./AddItemButton";

export default TodoList;

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function TodoList() {

    const { data, error } = useSWR("http://localhost:8080/todo", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            {data.map((todoItem) => (
                <Card key={todoItem.id} description={todoItem.description}></Card>
            ))}
            < AddItemButton createTypeName="Todo Item" />
        </>
    )
}