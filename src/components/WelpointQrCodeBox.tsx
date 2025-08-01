import { useEffect, useState } from "react";
import {generateWelpointQr} from "../utils/qrcode/qrcodeWelpointCanvas.ts";
import {qrcodeDownload} from "../utils/qrcode/qrcodeDownload.ts";
import Button from "./Button.tsx";
import CalloutsBlock from "./CalloutsBlock.tsx";
import {formatDate} from "../utils/dateUtil.ts";

interface WelpointQrCodeBoxProps {
    cardNumber: string;
    expiredDate: string;
}

function WelpointQrCodeBox({ cardNumber, expiredDate }: WelpointQrCodeBoxProps) {
    const [qrUrl, setQrUrl] = useState("");

    useEffect(() => {
        if (cardNumber) {
            generateWelpointQr(cardNumber).then(setQrUrl);
        }
    }, [cardNumber]);

    if (!cardNumber) return null;

    return (
        <div className="flex flex-col items-center mt-20">
            <CalloutsBlock>
                <p>✅ 위 페이지는 <strong>카카오 알림톡 발송일자로부터 3일까지만</strong> 접속 가능합니다.</p>
                <p>✅ QR코드는 다운로드 후 <strong>타인과 공유하지 마시고 안전하게 보관</strong>해 주십시오.</p>
                <p>⚠️ QR코드의 <strong>관리에 대한 책임은 개인에게</strong> 있습니다.</p>
                <p>⚠️ QR코드의 <strong>분실·도용 등 문제에 대해서 유비씨엔은 어떠한 책임도 지지 않습니다.</strong></p>
            </CalloutsBlock>
            <div className={"mb-2 text-sm text-gray-500 flex flex-col items-center"}>
                <p>접속 만료 예정 일자 </p>
                <p><u>{formatDate(expiredDate, ".")}</u></p>
            </div>
            <img src={qrUrl} alt="QR 코드" className="w-64 h-64 border mb-4" />
            <Button
                text="QR코드 다운로드"
                onClick={() => qrcodeDownload(qrUrl, `welpoint-${cardNumber}.png`)}
            />
        </div>
    );
}

export default WelpointQrCodeBox;
