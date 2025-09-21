import React from 'react'
import Banner from '../banner'
import Facility from '../Facility'
import Teachers from '../Teachers'

function About() {
  return (
    <>
    <Banner props={{heading:" About Our KidsAcademy",page:"About us"}}/>
    <Facility/>
    <Teachers/>
    </>
  )
}

export default About