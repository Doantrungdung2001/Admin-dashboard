import axiosClient from './axiosClient';

export const UserService = {
    createSession: async function (account) {
        const res = await axiosClient.post('/auth/login', account);
        return res;
    },
};
