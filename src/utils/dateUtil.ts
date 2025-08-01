/**
 * YYYYMMDD 포맷의 string 타입의 값을 Date 타입으로 변환하는 메서드.
 *
 * @param dateStr string타입의 YYYYMMDD
 */
export function parseDateTypeYyyymmdd(dateStr: string): Date {
    const year = parseInt(dateStr.slice(0, 4));
    const month = parseInt(dateStr.slice(4, 6)) - 1; // 0부터 시작
    const day = parseInt(dateStr.slice(6, 8));
    return new Date(year, month, day);
}

/**
 * YYYYMMDD 포맷으로 오늘 날짜를 리턴하는 메서드.
 */
export function getTodayFormatYyyymmdd(): string {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}${month}${day}`;
}

/**
 * YYYY-MM-DD 포맷의 Date 타입을 YYYYMMDD 포맷의 string 값으로 리턴하는 메서드.
 *
 * @param date
 */
export function convertFormatYyyymmdd(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
}

/**
 * YYYYMMDD 포맷을 YYYY-MM-DD(YYYY.MM.DD)로 리턴하는 메서드.
 *
 * @param yyyymmdd YYYYMMDD 포맷 string
 * @param separator 구분을 원하는 특수문자(디폴트 "-")
 */
export function formatDate(yyyymmdd: string, separator: string = "-"): string {
    if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd;
    return `${yyyymmdd.slice(0, 4)}${separator}${yyyymmdd.slice(4, 6)}${separator}${yyyymmdd.slice(6, 8)}`;
}

/**
 * 날짜 계산 메서드
 *
 * @param date 기준 날짜
 * @param days ± 계산하고자 하는 일자
 */
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}