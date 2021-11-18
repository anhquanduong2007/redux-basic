import * as types from "../constants";
export const getData = () => {
    return {
        type: types.GET_DATA,
    }
}
export const getDataSuccess = (data) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload: {
            data,
        }
    }
}
export const getDataFailed = (error) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload: {
            error
        }
    }
}
export const showLoading = () => {
    return {
        type: types.SHOW_LOADING,
    }
}
export const hiddenLoading = () => {
    return {
        type: types.HIDDEN_LOADING,
    }
}

// ** Add data
export const addData = (data) => {
    return {
        type: types.ADD_DATA,
        payload: {
            data,
        }
    }
}
export const addDataSuccess = (data) => {
    return {
        type: types.ADD_DATA_SUCCESS,
        payload: {
            data,
        }
    }
}
export const addDataFailed = (error) => {
    return {
        type: types.ADD_DATA_FAILED,
        payload: {
            error,
        }
    }
}

// Edit data
export const editData = (id,data) => {
    return {
        type: types.EDIT_DATA,
        payload: {
            id,
            data
        }
    }
}
export const editDataSuccess = (data) => {
    return {
        type: types.EDIT_DATA_SUCCESS,
        payload: {
            data,
        }
    }
}
export const editDataFailed = (error) => {
    return {
        type: types.EDIT_DATA_FAILED,
        payload: {
            error,
        }
    }
}

export const getID = (id) => {
    return {
        type: types.GET_ID,
        payload: {
            id,
        }
    }
}
export const resetID = () => {
    return {
        type: types.RESET_ID,
       
    }
}