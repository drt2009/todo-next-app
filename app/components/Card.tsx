export default Card;

type TodoItem = {
    id: number;
    description: string;
    complete: boolean;
    buttonClickOption: FunctionName;
}

function Card({ description, buttonClickOption, id, complete }: Readonly<TodoItem>) {
    const handlerClick = () => {
        console.log("In handle click")
        buttonClickOption(id, !complete)
    }


    return (
        <div className={"card w-2/3 bg-base-100 shadow-xl m-4" + (complete ? " opacity-25" : "")}>
            <div className="card-body items-center text-center">
                <p className={"text-xl" + (complete ? " line-through" : "")} >{description}</p>

            </div>
            <div className="card-actions justify-end">
                <button onClick={handlerClick} className="btn btn-primary w-32 m-4">{complete ? "Not " : ""} Done</button>
            </div>
        </div>
    )
}

