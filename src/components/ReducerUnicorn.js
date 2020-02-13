export const INITIAL_STATE = {
    list: [],
    status: 0,
    message: '',
    item: { 
        _id: '',
        name: '',
        age: 0,
        colour: ''
    }
}

const ReducerUnicorn = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_SUCCESS':
            return {
                ...state,
                list: action.data
            }
        case 'POST_SUCCESS':
            return {
                ...state,
                list: [ ...state.list, action.data ],
                status: 1,
                message: "Created with success"
            }
        case 'DELETE_SUCCESS':
            return {
                ...state,
                status: 1,
                message: "Delete with success"
            }
        case 'GET_BY_ID_SUCCESS':
            return {
                ...state,
                item: action.data
            }
        case 'PUT_SUCCESS':
            return {
                ...state,
                item: INITIAL_STATE.item,
                status: 1,
                message: "Updated with success"
            }
    
        default:
            return INITIAL_STATE;;
    }
}

export default ReducerUnicorn;