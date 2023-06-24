import React, { useState } from 'react'

const SingleCard = ({data}) => {
    // console.log(src);
    const[like,setLike]=useState(false);
    const[saved,setSaved]=useState(false);

    return (
        <div>
            <div className='card-wrap'>

                <div className='card-header' style={{ marginLeft: "5px" }}>
                    <img src={data.user?.profile_image?.large} alt="name" />
                    <span style={{ fontSize: "1.3rem", fontWeight: 600, marginLeft: "10px" }}> {data.user.first_name }</span>

                </div>

                <div className='img-wrap'>
                    <img src={data.urls.regular} alt="name" />
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
