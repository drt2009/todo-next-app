'use client'
import useSWR from 'swr';

export default Card;

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Card() {

    const { data, error } = useSWR("http://localhost:8080/todo/1", fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body items-center text-center">
                <p>{data.description}</p>
            </div>
        </div>
    )
}

