const guestUserDetails = (state={}, action)=>{
    if(action.type === 'userName'){
        state.userName = action.payload
    }else if(action.type === 'age'){
        state.age = action.payload
    }else return state;
}