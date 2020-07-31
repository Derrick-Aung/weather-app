import React from "react";
import Search from "../Search/Search";
import Error from "../Error/Error";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import Loader from "../Loader/Loader";
import styles from "./App.module.css";
import { useSelector } from "react-redux";

const App = () => {
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    return (
        <div className={styles.mainContainer}>
            <Search />
            {loading ? <Loader /> : error ? <Error /> : <WeatherDetails />}
        </div>
    );
};

export default App;
