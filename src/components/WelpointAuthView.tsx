import ubcnLogo from "../assets/images/ubcn-logo.png";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import CalloutsBlock from "../components/CalloutsBlock.tsx";

interface WelpointAuthViewProps {
    authPhoneNum: string;
    setAuthPhoneNum: (v: string) => void;
    checkAuthByPhoneNum: () => void;
}

/**
 * 웰포인트 QR인증 컴포넌트
 * @param authPhoneNum
 * @param setAuthPhoneNum
 * @param checkAuthByPhoneNum
 * @constructor
 */
function WelpointAuthView({ authPhoneNum, setAuthPhoneNum, checkAuthByPhoneNum }: WelpointAuthViewProps) {
    return (
        <div className="mt-20 flex flex-col items-center space-y-4">
            <img src={ubcnLogo} alt="ubcn-logo" className="h-auto" />
            <p className="font-semibold text-xl text-gray-600">
                Welpoint QR 접속인증 페이지
            </p>
            <CalloutsBlock>
                <p>✅ 카카오톡을 수신 받은 휴대폰 번호를 입력해주세요.</p>
                <p>✅ 연락처는 '-' 없이 숫자만 입력해주세요.</p>
                <p>⚠️ 카카오 알림톡 발송일자로부터 3일까지만 접속 가능합니다.</p>
            </CalloutsBlock>
            <div className="flex flex-col justify-center space-y-1.5">
                <Input
                    type="phone"
                    value={authPhoneNum}
                    placeholder="연락처 입력"
                    onChange={setAuthPhoneNum}
                    onKeyDown={checkAuthByPhoneNum}
                />
                <Button text="🔐️ 인증하기" onClick={checkAuthByPhoneNum} />
            </div>
        </div>
    );
}

export default WelpointAuthView;