export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    itam: null,
    // token: "BQDKEkJQerrIIa2fE2ALgFMJTv_5xVT4NNryr5aV-8tzWMPvTSYQ6RcU4Zof_V_JqEQ37CDdAnOArWuBaROHo3_a507rW5DbY7f5CfrEYg9ZZUiRUbdb_RXwzZnMQ_EzQ6-1wRPx9lFnvDob_iRf5dNdWg5LZnxAdcVSJYojsGp2oGwZoAvA"
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type){
         case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;