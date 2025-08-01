import {generateQr, loadImage} from './qrcodeCanvas.ts'
import ubcnLogo from "../../assets/images/ubcn-logo.png";

export async function generateWelpointQr(cardNumber: string) : Promise<string> {
    const qrUrl = await generateQr(cardNumber); // QR코드 URL 생성
    const qrImage = await loadImage(qrUrl);
    const logoImage = await loadImage(ubcnLogo);

    // 캔버스 생성
    const canvas = document.createElement('canvas');
    const canvasSize = 400;
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // 캔버스 API 객체
    const ctx = canvas.getContext('2d');

    // 캔버스 에러 시 리턴
    if (!ctx)
        throw new Error("Canvas not supported");

    // 흰색 배경 채우기(주석 시 투명배경)
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // QR코드 이미지 사이즈 및 위치 조정
    const qrCodeWidth = 256;
    const qrCodeHeight = 256;
    const qrCodeX = (canvasSize - qrCodeWidth) / 2;
    const qrCodeY = (canvasSize - qrCodeHeight) / 2;

    // 로고 이미지 사이즈 및 위치 조정
    const logoWidth = 124;
    const logoHeight = 35;
    const logoX = (canvasSize - logoWidth) / 2;
    const logoY = (canvasSize - 380);


    // 로고 + QR 합성 랜더링
    ctx.drawImage(qrImage,   qrCodeX, qrCodeY, qrCodeWidth, qrCodeHeight);
    ctx.drawImage(logoImage, logoX,   logoY,   logoWidth,   logoHeight);

    // 하단 카드번호 랜더링
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(cardNumber, canvas.width / 2, qrCodeY + qrCodeHeight + 40);

    return canvas.toDataURL();
}