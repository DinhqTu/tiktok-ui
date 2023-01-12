import * as request from '~/utils/httpRequest';

export const suggested = async (page = '1', per_page) => {
    const res = await request.get(`users/suggested`, {
        params: {
            page,
            per_page,
        },
    });
    // console.log(res.data);
    return res.data;
};
