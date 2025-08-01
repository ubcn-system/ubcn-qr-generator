import type {ReactNode} from "react";

interface CalloutsBlockProps {
    children: ReactNode;
}

/**
 * 콜아웃 블록 컴포넌트
 *
 * @param children HTML 요소
 */
function CalloutsBlock({children} : CalloutsBlockProps) {
    return (
        <div className={"p-4 m-4 bg-gray-100 rounded-md border border-gray-300 text-sm space-y-0.5 text-gray-600"}>
            {children}
        </div>
    )
}

export default CalloutsBlock