import * as request from '~/utils/httpRequest';

export const video = async (type, page = '1') => {
    const res = await request.get(`videos`, {
        params: {
            type,
            page,
        },
    });
    return res.data;
};
