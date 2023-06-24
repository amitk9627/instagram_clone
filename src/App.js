// import { useEffect, useState } from 'react';
import './App.css';
// import SingleCard from './Component/SingleCard';
import Home from './Component/Routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Routes/NavBar';
import Profile from './Component/Routes/Profile';

function App() {
  // const[detials,setDetials]=useState([]);
  // const fetchData=async ()=>{
  //   const res=await fetch("https://api.unsplash.com/photos/?client_id=6zKFPaBo1BceDjQ_9yCCTVa_O3kLV_2T5hV8FbAeraY");
  //   const data=await res.json();
  //   setDetials(data);

  // }
  // useEffect( ()=>{
  //   // fetchData();
  // },[])
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* {detials.map((item,i)=><SingleCard key={i} data={item} />)} */}

    </div>
  );
}

export default App;
