import React from 'react'
import Homebanner from './Homebanner';
import './home.css'
import Facility from '../Facility';
import Teachers from '../Teachers';

function Home() {
  return (
    <>
    <Homebanner/>
    <Facility/>
    <Teachers/>
    </>
  )
}

export default Home