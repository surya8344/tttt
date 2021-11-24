import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider';
import { ISlider } from '../interface/ISlider';
// import { getSliderDetails } from '../services/home-services'

export default function Home() {
    let dataDetails=[
        {
            id:1,
            name:"surya"
        }
    ]
    const [sliderDetails, setSliderDetails] = useState<ISlider[]>(dataDetails)
// useEffect(() => {
//     getSliderDetails()
//     .then((data:ISlider[])=>{
//         console.log(data);
//         setSliderDetails(data)
//     })
// }, [])
    return (
        <div>
            {/* <Slider data={sliderDetails} /> */}
            {
                sliderDetails.map((dataDetails:any)=>{
                    return(
                        <div>
                            <p>{dataDetails.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
