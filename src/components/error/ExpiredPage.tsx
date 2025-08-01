import Layout from "../../layouts/Layout.tsx";
import {WindowX} from "../../assets/svg/Window-X.tsx";
import CalloutsBlock from "../CalloutsBlock.tsx";
import WarningIconCircle from "../WarningIconCircle.tsx";

export function ExpiredPage() {
    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center text-center space-y-6 p-6">
                <WarningIconCircle>
                    <WindowX/>
                </WarningIconCircle>

                <h1 className="text-2xl font-semibold text-gray-700">
                    접속 유효기간 만료
                </h1>
                <CalloutsBlock>
                    <p>접속하신 URL의 페이지는 만료되었습니다.</p>
                    <p>관리자 문의를 통해 재발급 받으시길 바랍니다.</p>
                </CalloutsBlock>
            </div>
        </Layout>
    )
}