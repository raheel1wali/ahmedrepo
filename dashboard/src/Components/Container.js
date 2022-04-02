import React from 'react'
import"./Container.css"
import MainContainer from './MainContainer'
import TopContaniner from './TopContaniner'

function Contaniner() {
  return (
    <div className='contaniner'>
        <TopContaniner/>
        <MainContainer/>
    </div>
  )
}

export default Contaniner