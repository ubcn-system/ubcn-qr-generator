import type {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className={"flex flex-col items-center space-y-4"}>
            {children}
        </div>
    )
}

export default Layout