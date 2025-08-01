interface ButtonProps  {
    text: string
    onClick: () => void;
}

function Button({text, onClick} : ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-5 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
            {text}
        </button>
    )
}

export default Button;