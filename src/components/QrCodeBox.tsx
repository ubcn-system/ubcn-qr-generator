import { useEffect, useState } from "react";
import {mixQrWithLogo} from "../utils/qrcode/qrcodeCanvas.ts";
import Button from "./Button.tsx";
import {qrcodeDownload} from "../utils/qrcode/qrcodeDownload.ts";

interface QrCodeBoxProps {
    value: string;
}

function QrCodeBox({ value }: QrCodeBoxProps) {
    const [qrUrl, setQrUrl] = useState("");

    useEffect(() => {
        if (value) {
            mixQrWithLogo(value).then(setQrUrl);
        }
    }, [value]);

    if (!value) return null;

    return (
        <div className="flex flex-col items-center space-y-2 mt-4">
            <img src={qrUrl} alt="QR 코드" className="w-64 h-64 border" />
            <p className="text-xs text-gray-500 break-all text-center max-w-xs">{value}</p>
            <Button
                text="QR코드 다운로드"
                onClick={() => qrcodeDownload(qrUrl, `qr-${value}.png`)}
            />
        </div>
    );
}

export default QrCodeBox;
