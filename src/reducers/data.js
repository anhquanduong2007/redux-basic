import * as types from "../constants";
const initState = {
    data: [],
    error: "",
    loading: false,
    id: [],
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            }
        case types.GET_DATA_FAILED:
            return {
                ...state,
                error: action.payload.error,
            }
        case types.SHOW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case types.HIDDEN_LOADING:
            return {
                ...state,
                loading: false,
            }
        case types.ADD_DATA_SUCCESS:
            return {
                ...state,
                data: [action.payload.data].concat(state.data),
            }
        case types.ADD_DATA_FAILED:
            return {
                ...state,
                error: action.payload.error,
            }
        case types.EDIT_DATA_SUCCESS:
            const data = action.payload.data;
            const newArr = state.data.filter((item) => item.id !== data.id);
            newArr.push(data);
            return {
                ...state,
                data: newArr,
            }
        case types.EDIT_DATA_FAILED:
            return {
                ...state,
                error: action.payload.error,

            }
        case types.GET_ID:
            return {
                ...state,
                id: state.data.filter(item => item.id === action.payload.id),
            }
        case types.RESET_ID:
            return {
                ...state,
                id: [],
            }
        default:
            return state;
    }
}
export default reducer;