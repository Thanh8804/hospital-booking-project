import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService } from '../../services/userService';



// Action to fetch all users
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try{
            dispatch({ type : actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data));
            }
            else{
                dispatch(fetchGenderFailed());
            }
        }
        catch(e){
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e);
        }
    }
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) =>{
        try{
            let res = await getAllCodeService("POSITION");
            if(res && res.errCode === 0){
                dispatch(fetchPositionSuccess(res.data));
            }
            else{
                dispatch(fetchPositionFailed());
            }
        } catch(e){
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailded error', e)
        }
    }
}
export const fetchRoleStart = () => {
    return async (dispatch, getState) =>{
        try{
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data));
            }
            else{
                dispatch(fetchRoleFailed());
            }
        } catch(e){
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailded error', e)
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) =>{
        try{
            let res = await createNewUserService(data);
            console.log('vp check create user redux: ', res)
            if(res && res.errCode === 0){
                dispatch(saveUserSuccess());
            }
            else{
                dispatch(saveUserFailed());
            }
        } catch(e){
            dispatch(saveUserFailed());
            console.log('saveUserFailded error', e)
        }
    }
}
// export const saveUserFailded = () => {
//     type: 'CREATE_USER_FAILED'
// }
// export const saveUserSuccess = () => {
//     type: 'CREATE_USER_SUCCESS'
// }

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
});
