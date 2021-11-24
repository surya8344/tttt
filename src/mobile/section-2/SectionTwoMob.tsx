import React, { useEffect, useState } from 'react';
import './SectionTwoMob.scss'

const  SectionTwoMob:React.FC=()=> {
    const [user,setUser] = useState([])
    
  
    // const getApiData = ()=> {
    //   ServiceApi.getJsonData().then((response:any) =>{
    //     setUser(response.data)
        
    //   })
    // }
    return (
        <div>
            <div>
      {
        user.map((proj:any)=>{
          return(
            <div className="proj">
                
                <img className="logo" src={proj.logo} width="340px"/>
                <img className="mobile"src={proj.mobile3} width="650px"/>
                <img className="head" src={proj.head} width="340px"/>
                
                <img className="button" src={proj.button} width="160px"/>
                <div className="blur"></div>
                <img className="mob1" src={proj.mobile1} width="200px"/>
                <img className="mob2" src={proj.mobile2} width="200px"/>
                <div className="para">{proj.text}</div>
            </div>
          )
        })
      }
    </div>
        </div>
    )
  }
  
  export default SectionTwoMob