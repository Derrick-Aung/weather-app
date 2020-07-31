import React from "react";
import styles from "./WeatherDetails.module.css";
import { useSelector } from "react-redux";
import { kelvinToCelsius, capitalizeFirstLetter } from "../../utility";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const DetailComponent = ({ label, detail }) => {
    return (
        <div className={styles.detailContainer}>
            <span className={styles.muted}>{label}</span>
            <span className={styles.textPrimary}>{detail}</span>
        </div>
    );
};

const Location = ({ location, icon_url }) => {
    return (
        <div className={styles.locationContainer}>
            <LocationOnIcon style={{ marginRight: "10px" }} />
            <span
                style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginRight: "10px",
                }}
            >
                {location}
            </span>
            <img src={icon_url} alt="" />
        </div>
    );
};

const WeatherDetails = () => {
    const forecast = useSelector((state) => state.forecast);

    if (!forecast) {
        return null;
    }

    const { name, icon_url, main, weather, wind } = forecast;
    const weatherInfo = weather[0];

    const details = [
        {
            label: "Weather",
            detail: weatherInfo.main,
        },
        {
            label: "Description",
            detail: capitalizeFirstLetter(weatherInfo.description),
        },
        {
            label: "Temperature",
            detail: `${kelvinToCelsius(main.temp).toFixed(1)} °C`,
        },
        {
            label: "Pressure",
            detail: `${main.pressure} hPa`,
        },
        {
            label: "Humidity",
            detail: `${main.humidity} %`,
        },
        {
            label: "Wind",
            detail: `${wind.speed} m/s`,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Location location={name} icon_url={icon_url} />
            </div>
            <div className={styles.detailsContainer}>
                {details.map((d) => (
                    <DetailComponent {...d} />
                ))}
            </div>
        </div>
    );
};

export default WeatherDetails;
