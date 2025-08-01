import Layout from "../../layouts/Layout.tsx";
import CalloutsBlock from "../CalloutsBlock.tsx";
import ExclamationTriangle from "../../assets/svg/ExclamationTriangle.tsx";
import WarningIconCircle from "../WarningIconCircle.tsx";

function DataErrorPage() {
    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center text-center space-y-6 p-6">
                <WarningIconCircle>
                    <ExclamationTriangle/>
                </WarningIconCircle>

                <h1 className="text-2xl font-semibold text-gray-700">
                    데이터 조회 실패
                </h1>
                <CalloutsBlock>
                    <p className="text-gray-600 max-w-md">
                        요청하신 데이터가 올바르지 않습니다.
                    </p>
                    <p className="text-gray-600 max-w-md">
                        다시 한 번 링크를 확인하시거나, 해당 페이지를 닫아주세요.
                    </p>
                </CalloutsBlock>
            </div>
        </Layout>
    );
}

export default DataErrorPage;