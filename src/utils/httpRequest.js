import Axios from 'axios';

const request = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    // 2 get # nhau
    const response = await request.get(path, options); // get này là của Axios để gọi api
    return response.data;
};

export default request;
