import React, { useState, useEffect } from "react";

function SunInfo() {
    const [sunset, setSunset] = useState("");

    useEffect(() => {
        async function getSunsetForMountain(lat, lng) {
            let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
            let data = await response.json()
            return data
        }

        getSunsetForMountain("44.320686", "-71.291742").then(sunsetData => {
            setSunset(sunsetData.results.sunset);
        });
    }, [])

    return (
        <p>Sunset (UTC): {sunset}</p>
    )
}
export default SunInfo;
