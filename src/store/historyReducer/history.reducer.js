import * as types from './history.types';


let initState={
    isLoading:false,isError:false,history:[]
}

export const historyReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_HISTORY_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_HISTORY_SUCCESS:return{...state,isLoading:false,isError:false,history:payload}
        case types.GET_HISTORY_FAILURE:return{...state,isLoading:false,isError:true}

        case types.UPDATE_HISTORY_LOADING:return{...state,isLoading:true,isError:false}
        case types.UPDATE_HISTORY_SUCCESS:return{...state,isLoading:false,isError:false}
        case types.UPDATE_HISTORY_FAILURE:return{...state,isLoading:false,isError:true}

        case types.DELETE_HISTORY_LOADING:return{...state,isLoading:true,isError:false}
        case types.DELETE_HISTORY_SUCCESS:return{...state,isLoading:false,isError:false}
        case types.DELETE_HISTORY_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}