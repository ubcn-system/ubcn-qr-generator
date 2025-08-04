import axios from 'axios';

/**
 * devapi를 통한 Bypass용 클라이언트
 *
 * SSL 정책 우회를 위해 작성되었습니다.
 */
const bypassApiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BYPASS_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export default bypassApiClient;