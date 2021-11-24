// import React, { useEffect, useState } from 'react'
import { BASE_URL, GET_SLIDER_DETAILS } from '../consts/environments'
import { ISlider } from '../interface/ISlider'
// import axios from 'axios'


export const getSliderDetails=():Promise <ISlider[]> =>{
    
    return  fetch(`${BASE_URL}/${GET_SLIDER_DETAILS}`).then(res=>res.json())    
  
}
