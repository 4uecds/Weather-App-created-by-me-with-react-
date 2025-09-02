import TextField from '@mui/material/TextField';
import "./SearchBox.css" ;
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);
    const API_URL="http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY="5239d06657d764488c6eb583b2feca06";
    const API_CALL="https://api.openweathermap.org/data/2.5/weather"
    let getData=async()=>{
    try{
            let response=await fetch(`${API_URL}?q=${city}&limit=1&appid=${API_KEY}`);
            let JsonResponse=await response.json();
            console.log(JsonResponse)
            let { lat, lon ,name} =await  JsonResponse[0];
            let Response_Real = await fetch(
           `${API_CALL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            let JsonResponse2=await Response_Real.json();
            console.log(JsonResponse2);
            let results={
            city:JsonResponse2.name,
            temp:JsonResponse2.main.temp,
            tempMin:JsonResponse2.main.temp_min,
            tempMax:JsonResponse2.main.temp_max,
            humidity:JsonResponse2.main.humidity,
            feelsLike:JsonResponse2.main.feels_like,
            description:JsonResponse2.weather[0].description
            }
       
            return results;
        }
        catch(err)
        {
             throw true;
        }
        
    }
  
    let handleSubmit= async(event)=>{
        try{
             event.preventDefault();
         
         
         let Newinfo = await getData();
         setCity("");
         
         updateInfo(Newinfo);
        }
        catch(err){
         setErr(true);
        }
    }
    let handleChange=(event)=>{
     setErr(false);
     setCity(event.target.value)
    }


    return(
        <div className='SearchBox'>

            <br />
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Search City" variant="outlined" onChange={handleChange} value={city} />
            <br /><br />
            <Button variant="contained" type='submit'>Submit</Button>
            </form>
            {err&&<h3 style={{color:"red"}}> No Such Place Exist* </h3>}

        </div>
    )
}