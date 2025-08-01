/**
 * API 요청을 위한 공용 axios 클라이언트
 */

import axios from 'axios'

/**
 * 실제 API 요청 Part
 *
 * - `apiClient.get(url)`을 통해 GET 요청
 * - `apiClient.post(url, params)`를 통해 POST 요청
 */
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export default apiClient;