function WeatherItem({ weather }) {
    const city = weather.name;
    const country = weather.sys.country;
    const temp = Math.round(weather.main.temp);
    const condition = weather.weather[0].main.toString();
    const humidity = weather.main.humidity;
    const windSpeed = Math.round(weather.wind.speed); //m/s

    return (
        <section className="w-96 h-full">
            <main
                className={
                    condition.toLowerCase() === "rain"
                        ? "card rainy-bg"
                        : condition.toLowerCase() === "clear"
                        ? "card clear-bg"
                        : condition.toLowerCase() === "clouds"
                        ? "cloudy-bg card"
                        : condition.toLowerCase() === "thunderstormes"
                        ? "thunderstorm-bg card"
                        : "fog-bg card"
                }
            >
                <div className="card-compact shadow-lg ease-in duration-300">
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col-reverse ">
                                <h3 className="card-title">{city}</h3>
                                <h3>{country}</h3>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    <img
                                        width=""
                                        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                                        alt="icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col items-start text-center">
                                <h3
                                    className={
                                        temp > 20
                                            ? "card-title text-4xl text-neutral"
                                            : "card-title text-4xl text-white"
                                    }
                                >
                                    {condition}
                                </h3>
                                <p className="text-xs">Humidity {humidity}%</p>
                                <p className="text-xs">
                                    Wind speed {windSpeed}m/s
                                </p>
                            </div>
                            <div className="text-5xl flex justify-center items-center text-center">
                                <p
                                    className={
                                        temp > 20
                                            ? " text-neutral"
                                            : "text-white"
                                    }
                                >
                                    {temp} °C
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default WeatherItem;
