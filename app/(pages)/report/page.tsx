"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/components/ui/Loading';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// Define type for the weather data response
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    sunrise: number;
  };
  weather: {
    icon: string;
  }[];
  cod: number;
  message: string;
}

const Weatherpage = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Apply type for weatherData
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!city) {
      alert("Please enter a city");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (response.data.cod === 200) {
        setWeatherData(response.data);
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center  h-fit'>
      <div className='mt-[280px] w-[600px] h-[500px] max-sm:mt-[150px] ' >
        <form onSubmit={handleSubmit} className='   lg:ml-[60px] '>
          <input type='text' className=' max-sm:ml-[50px] max-sm:mt-[80px] text-black  w-[300px] px-6 p-4 lg:ml-6' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
          <button className='px-3 py-3 max-sm:pt-12  max-sm:ml-[50px]  rounded-full ml-6' type='submit'>Submit</button>
        </form>
        {loading && <p className=' mt-5'><Loading/></p>}
        {weatherData && (
  <div className="w-[900px] h-[400px] bg-black">
    <Dialog>
      <DialogTrigger className="text-4xl max-sm:ml-[170px]  max-sm:text-xl bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-50 tracking-tighter underline font-bold ml-12 mt-14">
        Click To See Weather Data
      </DialogTrigger>
      <DialogContent className="lg:w-[900px] max-sm:mt-[-350px] max-sm:ml-[-90px] max-sm:w-[400px] bg-black">
        <DialogHeader className="w-[900px] h-[200px]">
          <DialogTitle className='max-sm:ml-[-530px] '>Weather Information</DialogTitle>
          <div className="flex justify-between">
            <DialogDescription className="mt-12 flex">
              Name: {weatherData.name} <br />
              Temperature: {weatherData?.main.temp}&deg;C <br />
              Humidity: {weatherData?.main.humidity}&deg;C
          
              <Image
                className="ml-28"
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
                alt="icon"
                width={100}
                height={100}
              />
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
)}
      </div>
    </div>
  );
};

export default Weatherpage;
