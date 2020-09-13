export const IS_DEVELOPMENT = window.location.hostname === 'localhost';
export const IS_PRODUCTION = !IS_DEVELOPMENT;
export const API_URL = `http://${window.location.hostname}:1221`;

export async function apiCall(path: string, payload: { [key: string]: any} ) {
    console.log(API_URL)
    console.log(payload)
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