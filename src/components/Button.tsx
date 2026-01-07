interface ButtonProps  {
    text: string
    onClick: () => void;
}

/**
 * 버튼 컴포넌트
 * @param text 버튼명
 * @param onClick 이벤트
 * @constructor
 */
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