import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    positions: [],
    roles: [],
    users: [],
    topDoctors: [],
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }
            
         
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            } 
        case actionTypes.FETCH_POSITION_FAILED: 
            state.positions = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.users = [];
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
            state.topDoctors = [];
            return {
                ...state
            }
        default:
            return state;
    }
}
// const appReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.ADMIN_LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 adminInfo: action.adminInfo
//             }
//         case actionTypes.ADMIN_LOGIN_FAIL:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 adminInfo: null
//             }
//         case actionTypes.PROCESS_LOGOUT:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 adminInfo: null
//             }
//         default:
//             return state;
//     }
// }

export default adminReducer;