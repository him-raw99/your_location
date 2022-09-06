import { useEffect, useState } from 'react';
import './App.css';
import Data from './components/Data';

function App() {
  const [ip,setIp]=useState({});
  async function getData(){
    let fetchedReq=await fetch("https://ipapi.co/json/");
    let data = await fetchedReq.json()
    console.log(data)
    setIp(data)
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <>
    <h1 className='your-ip'>{ip.ip}</h1>
    <Data data1={"Your Country- "+ip.country_name} data2={"Your City- "+ip.city}/>
    <Data data1={"Your ISP's IP- "+ip.network} data2={"ISP- "+ip.org}/>
    <Data data1={"Longitude- "+ip.longitude} data2={"Latitude- "+ip.latitude}/>
    <Data data1={"Nearby Postal- "+ip.postal} data2={"Time Zone- "+ip.timezone}/>
    </>
  );
}

export default App;
