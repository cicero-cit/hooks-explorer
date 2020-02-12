import API from '../../API';

export const getAllUnicorn = () => {
    return async dispatch => {
        const { data } = await API.get('/unicorns');
        await dispatch({ type: 'GET_SUCCESS', data });   
    }
}

export const getByIdUnicorn = (id) => {
    return async dispatch => {
        const { data } = await API.get(`/unicorns/${id}`);
        await dispatch({ type: 'GET_BY_ID_SUCCESS', data });   
    }
}

export const postUnicorn = (unicorn) =>  {
    return async dispatch => {
        const { data } = await API.post('/unicorns', unicorn);
        dispatch({ type: 'POST_SUCCESS', data });   
    }
}

export const deleteUnicorn = (_id) => {
    return async dispatch => {
        await API.delete(`/unicorns/${_id}`);
        dispatch({ type: 'DELETE_SUCCESS' });   
    }
}

export const putUnicorn = (unicorn) => {
    return async dispatch => {
        const data = await API.put(`/unicorns/${unicorn._id}`, unicorn);
        dispatch({ type: 'PUT_SUCCESS', data });   
    }
}