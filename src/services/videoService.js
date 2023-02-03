import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    const res = await request.get(`users/search`, {
        params: {
            q,
            type,
        },
    });
    // console.log(res.data);
    return res.data;
};


export const suggestedAccount = async (page, per_page) => {
    const res = await request.get(`users/suggested`, {
        params: {
            page,
            per_page,
        },
    });
    // console.log(res.data);
    return res.data;
};