import * as types from './url.types';


let initState={
    isLoading:false,isError:false,result:[]
}

export const urlReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.URL_SCRAP_LOADING:return{...state,isLoading:true,isError:false}
        case types.URL_SCRAP_SUCCESS:return{...state,isLoading:false,isError:false,result:payload}
        case types.URL_SCRAP_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}