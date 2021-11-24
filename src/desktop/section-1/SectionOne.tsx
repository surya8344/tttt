import React,{useState,useEffect} from 'react'
import './SectionOne.scss'
import { BASE_URL } from '../../services/CommonURL'
export default function SectionOne() {
    
    const [data, setdata] = useState([])
    useEffect(() => {
    fetch (`${BASE_URL}`).then ((res)=>res.json()).then((val)=>setdata(val))
    console.log(data);
    
    },[])
    return (

        <>
           {
               data.map((data:any)=>{
                   return(
                       <div className="content-one">
                            <div className="content-main-img">
                                <img  className="content-img1" src= {data.image5} />
                                <img  className="content-img2" src= {data.image6} />
                            </div>
                            <div className="content-para-title">    
                                <h2 className="content-title">
                                    {data.paratitle}
                                </h2>
                                <div className="content-para">
                                    <p>{data.para}</p>
                                </div>
                                <img  className="content-img3" src= {data.image10} />
                                <img  className="content-img31" src= {data.image10} />
                                


                            </div>
                            <></>
                            <div className="media"></div>

                       </div>
                   )
               })
           }
            
        </>
    )
}
