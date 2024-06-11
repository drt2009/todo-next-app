export default Card;

type TodoItem = {
    id: number;
    description: string;
}

function Card({ description }: Readonly<TodoItem>) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body items-center text-center">
                <p>{description}</p>
            </div>
        </div>
    )
}

