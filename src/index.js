import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store";
import { getWeatherData } from "./actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// TODO make dynamic with geocoordinates
const cityName = "melbourne";

store.dispatch(getWeatherData(cityName));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
