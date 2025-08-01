import type {ReactNode} from "react";

interface WarningIconCircleProps {
 children?: ReactNode
}

export default function WarningIconCircle({children} : WarningIconCircleProps) {
    return (
        <div className="rounded-full bg-red-100 p-4 text-red-600">
            {children}
        </div>
    )
}