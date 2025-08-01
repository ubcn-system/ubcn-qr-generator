interface InputProps {
    type?: 'normal' | 'phone';
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onKeyDown?: () => void;
}

/**
 * Input 컴포넌트
 *
 * @param type 디폴트 normal
 * @param value
 * @param placeholder
 * @param onChange
 * @param onKeyDown Enter키를 눌렀을 때의 이벤트 메서드
 * @constructor
 */
function Input({ type = 'normal', value, placeholder, onChange, onKeyDown }: InputProps) {
    // 연락처 (010-1234-5678) 포맷으로 변경
    function formatPhoneNumber(value: string): string {
        // 숫자만 추출
        const numbersOnly = value.replace(/\D/g, '');

        if (numbersOnly.length <= 3) return numbersOnly;
        if (numbersOnly.length <= 7) {
            return numbersOnly.slice(0, 3) + '-' + numbersOnly.slice(3);
        }
        return (
            numbersOnly.slice(0, 3) +
            '-' +
            numbersOnly.slice(3, 7) +
            '-' +
            numbersOnly.slice(7, 11)
        );
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;

        if (type === 'phone') {
            onChange(formatPhoneNumber(inputValue));
        } else {
            onChange(inputValue);
        }
    };

    return (
        <div>
            <input
                className="border border-gray-300 rounded px-3 py-2 w-72 text-center"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && onKeyDown) onKeyDown();
                }}
            />
        </div>
    );
}

export default Input;
