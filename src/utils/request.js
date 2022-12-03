import Axios from 'axios';

const request = Axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    // 2 get # nhau
    const response = await request.get(path, options); // get này là của Axios để gọi api
    return response.data;
};

export default request;
