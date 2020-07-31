import React from "react";
import styles from "./WeatherDetails.module.css";
import { useSelector } from "react-redux";
import { kelvinToCelsius, capitalizeFirstLetter } from "../../utility";

const DetailComponent = ({ label, detail }) => {
    return (
        <div className={styles.detailContainer}>
            <span className={styles.muted}>{label}</span>
            <span className={styles.textPrimary}>{detail}</span>
        </div>
    );
};

const WeatherDetails = () => {
    const forecast = useSelector((state) => state.forecast);

    if (!forecast) {
        return null;
    }

    const { name, icon_url, main, weather } = forecast;
    const weatherInfo = weather[0];

    return (
        <div className={styles.container}>
            <div className={styles.title}>{name}</div>
            <div className={styles.imgContainer}>
                <img src={icon_url} alt="" />
            </div>
            <DetailComponent label="Weather" detail={weatherInfo.main} />
            <DetailComponent
                label="Description"
                detail={capitalizeFirstLetter(weatherInfo.description)}
            />
            <DetailComponent
                label="Temperature"
                detail={`${kelvinToCelsius(main.temp).toFixed(1)} °C`}
            />
        </div>
    );
};

export default WeatherDetails;
