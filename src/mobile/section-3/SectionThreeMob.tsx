import React from 'react'
// import  './card.scss';
import './mobileview.scss'

function SectionThreeMob(props : any) {
    return (
        <div className="wrapper" >
            <div className="totalbody">

                <div className="contentone">
                    
                    <div>
                        <img src={props.values.topimageone} className="datatwo" alt=""/>
                    </div>
                    <div className="moveableone">
                        <img src={props.values.imageone} className="dataone" alt=""/>
                    </div>
                    <p className="paraone" >{props.values.belowcontent}</p>
                    <div className="mainone">
                        <div>
                            <img src={props.values.bottomone} className="insta"alt=""/>
                        </div>
                        <p className="one">{props.values.one}</p>
                    </div>
                </div>

                <div className="contenttwo" >
                   
                    <div >
                        <img src={props.values.topimagetwo} className="datafour" alt=""/>
                    </div>
                    <div className="moveabletwo">
                        <img src={props.values.imagetwo} className="datathree" alt=""/>
                    </div>
                    <p className="paratwo" >{props.values.belowcontent}</p>
                    <div className="maintwo">
                        <div>
                            <img src={props.values.bottomone} className="insta" alt=""/>
                        </div>
                        <p className="one">{props.values.one}</p>
                    </div>
                </div>

                <div className="contentthree" >
                    
                    <div>
                        <img src={props.values.topimagethree} className="datasix" alt=""/>
                    </div>
                    <div className="moveablethree">
                        <img src={props.values.imagethree} className="datafive" alt="" />
                    </div>
                    <p className="parathree" >{props.values.belowcontent}</p>
                    <div className="mainthree">
                        <div>
                            <img src={props.values.bottomone} className="insta" alt=""/>
                        </div>
                        <p className="one">{props.values.one}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionThreeMob
 
