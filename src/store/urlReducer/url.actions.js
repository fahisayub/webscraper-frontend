import axios from 'axios';
import * as types from './url.types'


export const setUrlApi = (payload) => async (dispatch) => {
    dispatch({ type: types.URL_SCRAP_LOADING });

    await axios.post('', payload).then((res) => {
        dispatch({ type: types.URL_SCRAP_SUCCESS, payload: res.data });
        console.log(payload);
    }).catch((err) => {
        dispatch({ type: types.URL_SCRAP_FAILURE })
        console.log(err);

    })

}