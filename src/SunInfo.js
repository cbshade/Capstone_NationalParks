import React, { useState, useEffect } from "react";

function SunInfo(props) {
    const [sunset, setSunset] = useState("");
    const [sunrise, setSunrise] = useState("");

    useEffect(() => {
        async function getSunsetForMountain(lat, lng) {
            let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
            let data = await response.json()
            return data
        }

        getSunsetForMountain(props.lat, props.lng).then(sunsetData => {
            setSunset(sunsetData.results.sunset);
            setSunrise(sunsetData.results.sunrise);
        });

    }, [props.lat, props.lng])

    return (
        <>
            <p>Sunrise (UTC): {sunrise}</p>
            <p>Sunset (UTC): {sunset}</p>
        </>
    )
}
export default SunInfo;
