export const INITIAL_STATE = {
    list: [],
    status: 0,
    message: ''
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
                list: state.list.filter(item => item._id !== action.data._id),
                status: 1,
                message: "Delete with success"
            }
        case 'CLICK_EDIT':
            return {
                ...state,
                list: state.list.filter(item => item._id !== action.id)
            }
        case 'PUT_SUCCESS':
            return {
                ...state,
                list: state.list.filter(item => item._id !== action.id),
                status: 1,
                message: "Updated with success"
            }
    
        default:
            return INITIAL_STATE;;
    }
}

export default ReducerUnicorn;