import Layout from "../layouts/Layout.tsx";
import WarningIconCircle from "./WarningIconCircle.tsx";
import CalloutsBlock from "./CalloutsBlock.tsx";

interface ErrorTemplateProps {
    icon: React.ReactNode;
    title: string;
    messages: string[];
}

function ErrorTemplate({ icon, title, messages }: ErrorTemplateProps) {
    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center text-center space-y-6 p-6">
                <WarningIconCircle>{icon}</WarningIconCircle>
                <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
                <CalloutsBlock>
                    {messages.map((msg, index) => (
                        <p key={index}>
                            {msg}
                        </p>
                    ))}
                </CalloutsBlock>
            </div>
        </Layout>
    );
}

export default ErrorTemplate;
