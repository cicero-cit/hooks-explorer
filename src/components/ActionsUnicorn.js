import API from './../API';

export const getAllUnicorn = async () => {
    const { data } = await API.get('/unicorns');
    return { type: 'GET_SUCCESS', data };
}

export const getByIdUnicorn = async (id) => {
    const { data } = await API.get(`/unicorns/${id}`);
    return { type: 'GET_BY_ID_SUCCESS', data }
}

export const postUnicorn = async (unicorn) => {
    const { data } = await API.post('/unicorns', unicorn);
    return { type: 'POST_SUCCESS', data };
}

export const deleteUnicorn = async (_id) => {
    await API.delete(`/unicorns/${_id}`);
    return { type: 'DELETE_SUCCESS' };
}

export const putUnicorn = async (id, unicorn) => {
    const data = await API.put(`/unicorns/${id}`, unicorn);
    return { type: 'PUT_SUCCESS', data };
}