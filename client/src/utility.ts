export const IS_DEVELOPMENT = location.hostname === 'localhost';
export const IS_PRODUCTION = !IS_DEVELOPMENT;
export const API_URL = IS_PRODUCTION ? '' : 'http://localhost:1221';

export async function apiCall(path: string, payload: { [key: string]: any} ) {
    const res = await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token') || ''
        },
        body: JSON.stringify(payload)
    }).then((t) => t.json());
    return res;
}