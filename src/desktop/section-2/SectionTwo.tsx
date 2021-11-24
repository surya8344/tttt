import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../services/CommonURL';
import './SectionTwo.scss'

 const  SectionTwo:React.FC=()=> {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch (`${BASE_URL}`).then ((res)=>res.json()).then((val)=>setData(val))
    console.log(data);
    
    },[])
  return (
      <div className="section-2">
          
    {
      data.map((proj:any)=>{
        return(
          <div className="mobile">
              {/* <img className="content-1" src={proj.mobile1}alt="" /> */}
              <img className="mob2" src={proj.mobile2} alt="" />
              <img className="logo" src={proj.logo} alt="" />
              <img className="mobile"src={proj.mobile3}alt=""  />
              <img className="head" src={proj.head} alt="" />
              <div className="para">{proj.text}</div>
              <img className="button" src={proj.button} alt="" />
              
          </div>
        )
      })
    }
  </div>
      
  )
}

export default SectionTwo
