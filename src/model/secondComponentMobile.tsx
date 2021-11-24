import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import './SecondComponent.scss'
// import './SecondComponentMedia.scss'
import './SecondComponentMobileView.scss'
export default function SecondComponentMobileView() {
    const [user,setUser]=useState([])
    useEffect(() => {
       axios.get("http://localhost:7000/data").then(res=>{
           console.log(res.data)
           setUser(res.data)
       })
    }, [])
    return (

        <>
           {
               user.map((data:any)=>{
                   return(
                       <div className="content-one-mob">
                            <div className="content-main-img-mob">
                                <img  className="content-img1-mob" src= {data.image5} />
                                <p className="content-para-mob">{data.para}</p>
                                <h2 className="content-title-mob">
                                    {data.paratitle}
                                </h2>
                            <div className="content-para-title-mob">    
                            <img  className="content-img2-mob" src= {data.image6} />
                                <div className="media-mob"></div>
                                <img  className="content-img3-mob" src= {data.image10} />
                                <img  className="content-img31-mob" src= {data.image10} />
                                
                                </div>
                             </div>
                        </div>
                   )
               })
           }
            
        </>
    )
}
