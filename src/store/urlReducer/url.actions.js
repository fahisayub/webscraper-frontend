import axios from 'axios';
import * as types from './url.types'
import { getHistoryApi } from '../historyReducer/history.actions';


export const setUrlApi = (payload) => async (dispatch) => {
    dispatch({ type: types.URL_SCRAP_LOADING });

    await axios.post('https://webpage-scraper-backend.onrender.com/scrapurl/', payload).then((res) => {
        dispatch({ type: types.URL_SCRAP_SUCCESS, payload: res.data });
        console.log(res.data);
        dispatch(getHistoryApi());
    }).catch((err) => {
        dispatch({ type: types.URL_SCRAP_FAILURE })
        console.log(err);

    })

}