import axios, { AxiosInstance } from "axios";

interface LoginPayload {
    email: string;
    password: string;
}

interface RegisterPayload {
    email: string;
    password: string;
}

export const getYYJApiHttpClient = (accessToken?: string) => {
    const instance: AxiosInstance = axios.create({
        baseURL: process.env.YYJ_API_URL,
        timeout: 18000,
        headers: {
            ...(accessToken ? { Authorization: `${accessToken}`} : {}),
        },
    });
    const client = new YYJApiHttpClient(instance);

    return client;
}

class YYJApiHttpClient {
    constructor(private client: AxiosInstance) {}

    public async registerUser(payload: RegisterPayload) {
        const response = await this.client
            .post("/api/v1/auth/register", payload)
            .catch((e) => {
                throw new Error(e);
            });
        
        return response;
    }

    public async loginUser(payload: LoginPayload) {
        const response = await this.client
            .post("/api/v1/auth/login", payload)
            .catch((e) => {
                throw new Error(e);
            });
        
        return response;
    }
}