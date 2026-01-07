/**
 * 파라미터로 전달받은 값을 QR코드로 출력하는 페이지
 *
 * 접속 URL : `/common`
 */

import Layout from "../layouts/Layout.tsx";
import Input from "../components/Input.tsx";
import {useState} from "react";
import QrCodeBox from "../components/QrCodeBox.tsx";
import CalloutsBlock from "../components/CalloutsBlock.tsx";

function CommonPage() {
    const [text, setText] = useState("");

    return (
        <Layout>
            <CalloutsBlock>
                <p>✅ 아래에 입력한 값이 QR코드로 변환됩니다.</p>
            </CalloutsBlock>
            <div className={"flex justify-center space-x-1"}>
                <Input value={text} placeholder={"텍스트를 입력해주세요."} onChange={setText}/>
            </div>
            <div className="flex justify-center">
                <QrCodeBox value={text}/>
            </div>
        </Layout>
    );
}

export default CommonPage;
