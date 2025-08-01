import ErrorTemplate from "../components/ErrorTemplate.tsx";
import {WindowX} from "../assets/svg/Window-X.tsx";

export default function ErrorPage404() {
    return <ErrorTemplate
        icon={<WindowX/>}
        title="404 Not Found"
        messages={[
            "요청하신 페이지를 찾을 수 없습니다."
        ]}
    />;
}
