import React,{ useState } from "react"
import "./weather.css"
import DisplayWeather from "./DisplayWeather";


function Weather () {

    const [form, setForm] = useState({
        city: "",
        country: "",
    })

    const [weather, setWeather] = useState ([
        
    ])



    const APIKEY = '8d68c5d73d223fac2e4d48ef439527ec'

    //Fetching Weather Data
    async function weatherData(e) {
        e.preventDefault();

        //checking if the input has a value
        if(form.city == ''){
            alert('Add Values')
        } else {
            //making the api call
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            const data = await res.json()
            console.log(data)
            setWeather({data : data});
        }
    }



    const handleChange = (e) => {
        let name = e.target.name 
        let value = e.target.value
        // console.log(e)
        if(name == 'city'){
            setForm({
                ...form,
                city: value
            })
        }
        if(name == 'country'){
            setForm({
                ...form,
                country: value
            })
        }

      
    }

    // console.log(form.city, form.country)
  return (
    <div className='weather'>
        <span className="title">Weather App</span>
        <br />

        <form action="">
            <input type="text" name="city" placeholder="city" onChange={handleChange}/>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="text" name="country" placeholder="country" onChange={handleChange}/>
            <button className="getweather" onClick={weatherData}>Submit</button>
        </form>


      {
            weather.data !== undefined ? (
            <div>
                <DisplayWeather data={weather.data}/>
            </div> 
        ) : null}
    
    </div>

);
  
}

export default Weather
