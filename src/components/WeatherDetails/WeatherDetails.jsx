import React from "react";
import styles from "./WeatherDetails.module.css";

const WeatherDetails = () => {
    return (
        <div className={styles.container}>
            <div>Location</div>
            <div>Icon</div>
            <div>Clear</div>
            <div>Clear Sky </div>
            <div>Temperature</div>
        </div>
    );
};

export default WeatherDetails;
