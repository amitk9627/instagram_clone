import React, { useState, useEffect } from 'react'
import SingleCard from '../SingleCard'
import NavBar from './NavBar';
// import NavBar from './NavBar';
const Home = () => {
    const [detials, setDetials] = useState([]);
    const fetchData = async () => {
        const res = await fetch("https://api.unsplash.com/photos/?client_id=6zKFPaBo1BceDjQ_9yCCTVa_O3kLV_2T5hV8FbAeraY");
        const data = await res.json();
        setDetials(data)

    }
    useEffect(() => {
        //fetchData();
    }, [])
    return (<>
        <div style={{ display: "flex" }}>
            <div style={{width:"30%"}}> <NavBar /></div>

            <div style={{ width: "70%" }}>

                {detials.map((item, i) => <SingleCard key={i} data={item} />)}

            </div>
        </div></>
    )
}

export default Home
