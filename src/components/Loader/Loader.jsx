import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
    return (
        <Loader
            type="Rings"
            color="#03dac5"
            height={200}
            width={200}
            timeout={3000} //3 secs
        />
    );
};

export default LoaderComponent;
