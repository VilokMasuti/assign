"use client"
import React, { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
import Loading from '@/components/ui/Loading';

const Weatherpage = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const [weatherData, setWeatherData] = useState(null); // Initialize weatherData as null
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false); // Initialize loading state as false

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!city) {
      // If city is empty, display a toast message
      alert("Please enter a city");
      return;
    }

    setLoading(true); // Set loading state to true when submitting form
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      console.log(response.data);
      
      if (response.data.cod === 200) {
        setWeatherData(response.data);
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Reset loading state to false after API call completes
    }
  };

  return (
    <div className='flex items-center justify-center mx-auto'>
      <div className='mt-[280px] '>
      
        <form onSubmit={handleSubmit} className='   ml-[60px]'>
          <input type='text' className='  text-black  w-[300px] px-6 p-4 ml-6' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
          <button className='px-6 py-3 bg-black text-white  rounded-full ml-6' type='submit'>Submit</button>
        </form>
        {loading && <p className=' mt-5'><Loading/></p>} {/* Display loading message while loading */}
        {weatherData && ( // Check if weatherData is available
            
            <Dialog  className=' w-[900px] bg-black'>
              <DialogTrigger className="  text-4xl bg-clip-text text-transparent bg-clip bg-gradient-to-b from-black to-neutral-50 tracking-tighter underline  font-bold ml-12 mt-14   ">Click To See Weather Data</DialogTrigger>
              <DialogContent  className=' w-[900px]  bg-black' >
                <DialogHeader className=' w-[900px] h-[200px] '>
                  <DialogTitle>Weather Information</DialogTitle>
                  <div className=' flex justify-between'>
                  <DialogDescription  className=" mt-12 flex">
                    Name: {weatherData.name} <br />
                    Temperature: {weatherData?.main.temp}&deg;C <br />
                    Humidity: {weatherData?.main.humidity}&deg;C
                    population:{weatherData?.main.sunrise}
                    <Image className=' ml-28' src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} alt="icon" width={100} height={100} />
                  </DialogDescription>  
                  </div>
                  
                </DialogHeader>
              </DialogContent>
            </Dialog>
        
        )}
      </div>
    </div>
  );
};

export default Weatherpage;
