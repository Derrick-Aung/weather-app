import React from "react";
import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <Search />
            <WeatherDetails />
        </div>
    );
};

export default App;
