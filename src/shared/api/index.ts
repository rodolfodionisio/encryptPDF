import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
    baseURL: process.env.TICKETLOG_API_URL,
});

axiosRetry(api, { retries: 4 });

api.interceptors.request.use(async (config) => {
    const base64Auth = Buffer.from(
        `${process.env.TICKETLOG_API_USER}:${process.env.TICKETLOG_API_PASS}`,
    ).toString('base64');

    config.headers.Authorization = `Basic ${base64Auth}`;
    return config;
});

export { api };
