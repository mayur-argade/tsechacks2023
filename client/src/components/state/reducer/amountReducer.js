// amount reducer mtlb vo amount se khilvaad krega naa ki amount reduce krega

const reducer = (state=0, action)=>{
    if(action.type === 'deposit'){
        return state+action.payload;
    }else if(action.type === 'withdraw'){
        return state - action.payload;
    }else return state;
}


export default reducer;