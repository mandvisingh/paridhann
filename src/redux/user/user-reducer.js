import userActiontypes from "./user-types";

const INITAL_STATE = {
currentUser: {
    id: null
}
}
const userReducer = (state = INITAL_STATE, action) => {
switch(action.type){
case userActiontypes.setCurrentUser:
    return{
        ...state,
        currentUser: action.payload
    }
    default:
        return state
}
}
export default userReducer;