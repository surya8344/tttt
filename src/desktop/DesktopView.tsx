import React from 'react'
import SectionOne from './section-1/SectionOne'
import SectionTwo from './section-2/SectionTwo'
import SectionThree from './section-3/SectionThree'

function DesktopView() {
    return (
        <div>
            <div className="s1">
            <SectionOne/>
            </div>
            <div className="s2">
            <SectionTwo />
            </div>
            <div>
            <SectionThree/>
            </div>
        </div>
    )
}

export default DesktopView
