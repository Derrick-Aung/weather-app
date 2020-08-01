import axios from "axios";
import {
    BACKEND_HOST,
    WEATHER_API_HOST,
    WEATHER_ICON_API_HOST,
} from "../constants";
import {
    GET_WEATHER_INITIATED,
    GET_WEATHER_FAIL,
    GET_WEATHER_SUCCESS,
} from "../types";

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getWeatherData = (city_name) => async (dispatch) => {
    const weather_url = `${WEATHER_API_HOST}?appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&q=${city_name}`;

    dispatch({
        type: GET_WEATHER_INITIATED,
    });

    // send search query to node backend
    axios.post(`${BACKEND_HOST}searches`, { text: city_name }, config);

    try {
        const { data } = await axios.get(weather_url);

        const icon = data.weather[0].icon;
        const icon_url = WEATHER_ICON_API_HOST(icon);
        data.icon_url = icon_url;

        dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_WEATHER_FAIL });
        console.log(error);
    }
};
