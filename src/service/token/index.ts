let token: string | null = null;

export function setToken(newToken: string) {
    token = newToken;
}

export function getToken() {
    return token ? JSON.parse(token) : false;
}

export function clearToken() {
    token = null;
}