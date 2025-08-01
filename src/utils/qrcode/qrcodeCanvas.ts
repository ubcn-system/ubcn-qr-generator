import QRCode from "qrcode";
import ubcnLogo from "../../assets/images/ubcn-logo.png";

/**
 * QR코드를 유비씨엔 로고와 합성하여 전달합니다.
 * 일반적으로 사용 가능한 QR코드 생성 유틸입니다.
 */

/**
 * 이미지 src 경로를 HTMLImageElement로 반환 하는 메서드.
 *
 * @param src 이미지 소스 경로 (QR코드 URL)
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("이미지 로딩 실패"));
        img.src = src;
    })
}

/**
 * QR코드 생성 메서드.
 *
 * @param text 해당 string 값을 QR코드로 반환.
 */
export async function generateQr(text: string): Promise<string> {
    try {
        const url = QRCode.toDataURL(text, {
            width: 256,
            margin: 2,
            color: {
                dark: "#000000",
                light: "#ffffff",
            },
        });

        return url;
    } catch (err) {
        console.error("QR 코드 생성 실패:", err);
        return "";
    }
}

/**
 * QR코드 + UBCN 로고 합성 메서드.
 *
 * @param text 해당 string 값을 QR코드로 반환 + UBCN 로고.
 */
export async function mixQrWithLogo(text: string) : Promise<string> {
    const qrUrl = await generateQr(text); // QR코드 URL 생성
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

    // 합성 랜더링
    ctx.drawImage(qrImage,   qrCodeX, qrCodeY, qrCodeWidth, qrCodeHeight);
    ctx.drawImage(logoImage, logoX,   logoY,   logoWidth,   logoHeight);

    return canvas.toDataURL();
}
