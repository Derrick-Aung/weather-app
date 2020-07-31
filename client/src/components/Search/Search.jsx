import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../../actions";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";

const Search = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherData(city));
    };

    return (
        <div className={styles.searchBox}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
