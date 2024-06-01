export default AddItemButton

function AddItemButton() {
    return (
        <button className="btn btn-circle rounded-full w-12 h-12 flex items-center justify-center"
            title="Create new item"
            aria-label="Create new item">
            <span className="text-2xl">+</span>
        </button>
    )
}
