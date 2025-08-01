/**
 * QR코드 다운로드 유틸 메서드
 * @param dataUrl
 * @param filename
 */
export function qrcodeDownload(dataUrl: string, filename: string) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
