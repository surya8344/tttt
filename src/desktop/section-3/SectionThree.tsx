import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../services/CommonURL'
import  './SectionThree.scss'

function SectionThree(props : any) {
    const [data, setdata] = useState([])
    useEffect(() => {
    fetch (`${BASE_URL}`).then ((res)=>res.json()).then((val)=>setdata(val))
    console.log(data);
    
    },[])
    return (
        <div className="wrapper" >
            {
                data.map((data:any)=>{
                    return(
            <div className="totalbody">

                <div className="contentone">
                    
                    <div>
                        <img src={data.topimageone} className="datatwo" alt=""/>
                    </div>
                    <div className="moveableone">
                        <img src={data.imageone} className="dataone" alt=""/>
                    </div>
                    <p className="paraone" >{data.belowcontent}</p>
                    <div className="mainone">
                        <div>
                            <img src={data.bottomone} className="insta"alt=""/>
                        </div>
                        <p className="one">{data.one}</p>
                    </div>
                </div>

                {/* <div className="contenttwo" >
                   
                    <div >
                        <img src={data.topimagetwo} className="datafour" alt=""/>
                    </div>
                    <div className="moveabletwo">
                        <img src={data.imagetwo} className="datathree" alt=""/>
                    </div>
                    <p className="paratwo" >{data.belowcontent}</p>
                    <div className="maintwo">
                        <div>
                            <img src={data.bottomone} className="insta" alt=""/>
                        </div>
                        <p className="one">{data.one}</p>
                    </div>
                </div>

                <div className="contentthree" >
                    
                    <div>
                        <img src={data.topimagethree} className="datasix" alt=""/>
                    </div>
                    <div className="moveablethree">
                        <img src={data.imagethree} className="datafive" alt="" />
                    </div>
                    <p className="parathree" >{data.belowcontent}</p>
                    <div className="mainthree">
                        <div>
                            <img src={data.bottomone} className="insta" alt=""/>
                        </div>
                        <p className="one">{data.one}</p>
                    </div>
                </div> */}

            </div>
            )
        })
    }
        </div>
    )
}

export default SectionThree
 
