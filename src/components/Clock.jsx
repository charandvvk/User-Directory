import { useEffect, useState } from "react";
import classes from "./Clock.module.css";

function Clock() {
    const [countries, setCountries] = useState();
    const [selectedCountry, setSelectedCountry] = useState();
    const [isPaused, setIsPaused] = useState();
    const [time, setTime] = useState();

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setIsPaused(false);
    };

    const togglePause = () => {
        setIsPaused((prevState) => !prevState);
    };

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(
                "http://worldtimeapi.org/api/timezone"
            );
            const data = await response.json();
            setCountries(data);
            setSelectedCountry(data[0]);
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchTime = async () => {
            const response = await fetch(
                `http://worldtimeapi.org/api/timezone/${selectedCountry}`
            );
            const data = await response.json();
            const dateTime = new Date(data.datetime);
            const timeZone = selectedCountry;
            const options = {
                timeZone,
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            setTime(dateTime.toLocaleTimeString("en-US", options));
        };
        if (!isPaused) {
            const id = setInterval(() => {
                fetchTime();
            }, 1000);
            return () => clearInterval(id);
        }
    }, [isPaused, selectedCountry]);

    return (
        <div className={classes.clock}>
            <select
                onChange={handleCountryChange}
                value={selectedCountry}
                className={classes.dropdown}
            >
                {countries &&
                    countries.map((country) => (
                        <option key={country}>{country}</option>
                    ))}
            </select>
            <div className={classes.time}>{time}</div>
            <button className={classes.control} onClick={togglePause}>
                Pause/Start
            </button>
        </div>
    );
}

export default Clock;
