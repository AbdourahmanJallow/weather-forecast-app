import axios from 'axios';
import { useState, useEffect } from 'react'
import Spinner from '../components/layout/Spinner';
import WeatherItem from './WeatherItem';

function SearchAddress() {
    const [address, setAddress] = useState('')
    const [coordinates, setCoordinates] = useState(null);
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
            const fetchCoordinates = async (location) => {
                setLoading(true)

                try {
                    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API}`);
                
                    const resp = await response.json();
                    setCoordinates(resp)
                    const latitude = coordinates[0].lat;      
                    const longitude = coordinates[0].lon;  

                    const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`)
                    const res = weatherRes.data;
                    setWeather(res)
                } catch (error) {
                    console.log(error.message)
                } finally {
                    setLoading(false)
                }
            }

        fetchCoordinates(address)
        // eslint-disable-next-line
    }, [address, weather])


    const onSubmit = async (e) => {
        e.preventDefault();
        if (address === '') {
            alert('Please enter something...')
        } else {
                setAddress('');
            }
    }
    
    const onChange = (e) => {
        setAddress(e.target.value)
    }

    return (
        <div className="grid grid-cols-1 mb-12">
            <div className="form-control mb-12">
                <form onSubmit={onSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder='City, Place...'
                            className='input input-lg bg-white text-black w-full'
                            value={address}
                            id='address'
                            onChange={onChange}
                        />
                        <button type='submit' className='absolute top-0 right-0 btn btn-lg rounded-l-none text-gray-500'>Search</button>
                    </div>
                </form>
            </div>
        
            {loading ? <Spinner /> :
                <>
                    { weather &&
                        <WeatherItem weather={weather} />
                    }
                </>
            }
        </div>
    )
}

export default SearchAddress