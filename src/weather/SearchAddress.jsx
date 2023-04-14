import axios from "axios";
import { useState } from "react";
import Spinner from "../components/layout/Spinner";
import WeatherItem from "./WeatherItem";

function SearchAddress() {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCoordinates = async (e) => {
        if (e.key === "Enter") {
            setLoading(true);

            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API}`
                );

                const resp = await response.data;
                setCoordinates(resp);
                const latitude = resp[0].lat;
                const longitude = resp[0].lon;
                console.log(resp);
                setAddress("");

                const weatherRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`
                );
                const res = weatherRes.data;
                setWeather(res);
                console.log(res);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="grid mb-12 place-content-center place-items-center min-w-fit">
            <div className="form-control mb-12">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="City, Place..."
                        className="input input-md bg-white text-black"
                        value={address}
                        id="address"
                        onChange={(e) => setAddress(e.target.value)}
                        onKeyUp={fetchCoordinates}
                    />
                </div>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <>{weather && <WeatherItem weather={weather} />}</>
            )}
        </div>
    );
}

export default SearchAddress;
