import {
    GET_WEATHER_INITIATED,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
} from "../types";

const initialState = {
    loading: false,
    error: false,
    weather: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_INITIATED:
            return {
                ...state,
                loading: true,
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
                loading: false,
                error: false,
            };
        case GET_WEATHER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
