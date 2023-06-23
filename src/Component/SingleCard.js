import React, { useState } from 'react'

const SingleCard = () => {
    const[like,setLike]=useState(false);
    const[saved,setSaved]=useState(false);

    return (
        <div>
            <div className='card-wrap'>

                <div className='card-header' style={{ marginLeft: "5px" }}>
                    <img src="https://plus.unsplash.com/premium_photo-1681266198484-f24f4280cdb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="name" />
                    <span style={{ fontSize: "1.3rem", fontWeight: 600, marginLeft: "10px" }}> { }Amit Kumar</span>

                </div>

                <div className='img-wrap'>
                    <img src="https://plus.unsplash.com/premium_photo-1681266198484-f24f4280cdb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="name" />
                </div>

                <div className='card-footer'>
                    <div className='likecommentshare'>
                        <div onClick={()=>setLike(!like)}><i className="fa-solid fa-heart icon" id={`${like ? "like" : "dislike"}`}></i></div>
                        <div><i className="fa-solid fa-comment icon"></i></div>
                        <div><i className="fa-solid fa-share icon"></i></div>
                    </div>
                    <div className='save'>
                        <div onClick={()=>setSaved(!saved)}><i className="fa-solid fa-bookmark icon" id={`${saved ? "saved" : "unsaved"}`}></i></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleCard;
