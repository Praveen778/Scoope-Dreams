import React from 'react'
import Navbarsection from '../componenets/Navbarsection'
import Herosection from '../componenets/Herosection'
import Contentsection from '../componenets/Contentsection'
import Gallerysection from '../componenets/Gallerysection'
import Hoversection from '../componenets/Hoversection'
import Featuresection from '../componenets/featuresection'
import Pricingsection from '../componenets/Pricingsection'
import Teamsection from '../componenets/Teamsection'
import Testimonialsection from '../componenets/Testimonialsection'
import Contactsection from '../componenets/Contactsection'
import Footersection from '../componenets/Footersection'

const Landingpage = ({change}) => {
  return (
    <div>
        <Navbarsection change={change} />
        <Herosection change={change}/>
        <Contentsection change={change}/>
        <Gallerysection change={change} />
        <Hoversection change={change} />
        <Featuresection change={change}/>
        <Pricingsection change={change}/>
        <Teamsection change={change}/>
        <Testimonialsection change={change} />
        <Contactsection change={change} />
        <Footersection change={change}/>
    </div>
  )
}

export default Landingpage