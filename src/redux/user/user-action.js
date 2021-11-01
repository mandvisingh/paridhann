import userActiontypes from "./user-types";

export const setCurrentUser=user=>({
    type: userActiontypes.setCurrentUser,
    payload: user
})