const userReducer = (stateUser, action) => {
    switch(action.type){
        case 'updateUser':
            return { ...stateUser, user:  {firstName: action.user.firstName, lastName: action.user.lastName}};
            default: return { ...stateUser }
    }
}
export default userReducer