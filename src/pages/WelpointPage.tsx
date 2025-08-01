import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import WelpointQrCodeBox from "../components/WelpointQrCodeBox.tsx";
import apiClient from "../api/ApiClient.ts";
import Layout from "../layouts/Layout.tsx";
import {addDays, convertFormatYyyymmdd, getTodayFormatYyyymmdd, parseDateTypeYyyymmdd} from "../utils/dateUtil.ts";
import WelpointAuthView from "../components/WelpointAuthView.tsx";
import {Loading} from "../components/Loading.tsx";
import ErrorTemplate from "../components/ErrorTemplate.tsx";
import ExclamationTriangle from "../assets/svg/ExclamationTriangle.tsx";
import {WindowX} from "../assets/svg/Window-X.tsx";


function WelpointPage() {
    // Get요청 파라미터용 변수
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const encryptedData = queryParams.get("key");

    // key 내부 데이터
    const [phone, setPhone] = useState("");
    const [card, setCard] = useState("");
    const [date, setDate] = useState("");

    // 유효성 검사 변수
    const [isLoading, setIsLoading] = useState(true);
    const [authPhoneNum, setAuthPhoneNum] = useState('');
    const [valid, setValid] = useState(false);

    // URL 접속 유효기간 확인을 위한 날짜 변수(오늘 & 발급 3일 후 일자)
    const today = getTodayFormatYyyymmdd();
    const [later3Day, setLater3Day] = useState('');

    // 접속 시 key 복화화
    useEffect(() => {
        if (!encryptedData) {
            setIsLoading(false);
            return;
        }

        /** URL에 담긴 key 복호화 진행 */
        const decryptKey = async () => {
            try {
                const param = `decrypt?cipherText=${encryptedData}`;
                const result = await apiClient.get(param);
                const dateStr = result.data.date ?? "";

                setPhone(result.data.phone ?? "");
                setCard(result.data.card ?? "");
                setDate(dateStr);

                /**
                 * 유효일자 확인을 위한 3일 뒤 일자 Get 메서드
                 *      1. date의 타입을 string → Date로 변환
                 *      2. 변환된 date에 + 3일 계산
                 *      3. `date+3` 값을 string으로 변환
                 */
                setLater3Day(convertFormatYyyymmdd(
                    addDays(parseDateTypeYyyymmdd(dateStr), 3)
                    ))
            } catch (error) {
                console.error("복호화 실패:", error);
            } finally {
                setIsLoading(false);
            }
        };

        decryptKey();
    }, [encryptedData]);


    const checkAuthByPhoneNum = () => {
        if(phone === authPhoneNum.replace(/-/g, '')) {
            setValid(true);
        } else {
            setValid(false);
            alert("카카오 알림톡이 전송된 핸드폰 번호와 일치하지 않습니다.")
        }
    }

    function ViewQrCodePage({ card }: { card: string }) {
        return <WelpointQrCodeBox cardNumber={card} expiredDate={later3Day} />;
    }

    /**
     * 실제 렌더링 될 페이지
     */
    const renderContent = () => {
        switch (true) {
            case isLoading: // 로딩 페이지
                return <Loading isLoading={isLoading}/>;

            case !phone || !card || !date: // 유효성 검증 실패 에러페이지
                return <ErrorTemplate
                    icon={<ExclamationTriangle />}
                    title="데이터 조회 실패"
                    messages={[
                        "요청하신 데이터가 올바르지 않습니다.",
                        "다시 한 번 링크를 확인하시거나, 해당 페이지를 닫아주세요.",
                    ]}
                />;

            case today > later3Day: // 유효기간 만료(발급일로부터 3일 후)
                return <ErrorTemplate
                    icon={<WindowX/>}
                    title="접속 유효기간 만료"
                    messages={[
                        "접속하신 URL의 페이지는 만료되었습니다.",
                        "관리자 문의를 통해 재발급 받으시길 바랍니다.",
                    ]}
                />;

            case !valid: // 사용자 인증(연락처 입력)
                return (
                    <WelpointAuthView
                        authPhoneNum={authPhoneNum}
                        setAuthPhoneNum={setAuthPhoneNum}
                        checkAuthByPhoneNum={checkAuthByPhoneNum}
                    />
                );

            default: // QR코드 뷰어
                return <ViewQrCodePage card={card} />;
        }
    };

    return (
        <Layout>
            {renderContent()}
        </Layout>
    );
}

export default WelpointPage;
