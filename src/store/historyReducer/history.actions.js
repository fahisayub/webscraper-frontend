import axios from "axios";
import * as types from './history.types';

export const getHistoryApi = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_HISTORY_LOADING });

    await axios.get(`https://webpage-scraper-backend.onrender.com/scrapurl/history`).then((res) => {
        dispatch({ type: types.GET_HISTORY_SUCCESS, payload: res.data.data });
        console.log(res.data.data);
    }).catch((err) => {
        dispatch({ type: types.GET_HISTORY_FAILURE })
        console.log(err);

    })

}
export const updateHistoryApi = (payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_HISTORY_LOADING });

    await axios.put(`https://webpage-scraper-backend.onrender.com/scrapurl/${payload._id}`,payload).then((res) => {
        dispatch({ type: types.UPDATE_HISTORY_SUCCESS, });
        dispatch(getHistoryApi())
    }).catch((err) => {
        dispatch({ type: types.UPDATE_HISTORY_FAILURE })
        console.log(err);

    })

}
export const deleteHistoryApi = (payload) => async (dispatch) => {
    dispatch({ type: types.DELETE_HISTORY_LOADING });

    await axios.delete(`https://webpage-scraper-backend.onrender.com/scrapurl/${payload}`).then((res) => {
        dispatch({ type: types.DELETE_HISTORY_SUCCESS, });
        dispatch(getHistoryApi())
    }).catch((err) => {
        dispatch({ type: types.DELETE_HISTORY_FAILURE })
        console.log(err);

    })

}