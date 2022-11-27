import React, { useRef } from 'react'
import Card from '../global components/Card'


function Garden() {

    const plantsRef =useRef()
    function handleSearch (e) {
        console.log(plantsRef.current);
        plantsRef.current.childNodes.forEach(element => {
            if(element.textContent.includes(e.target.value)){console.log(element);}
        })
    }
  return (
    <div className='main-container'>
        <Card className='message'>
            Last irregation: 'date',
            general garden tips
        </Card>

        <input className={'py-2 px-2 rounded-lg'} type="text" onChange={handleSearch} placeholder='Search Plant'/>
        <div ref={plantsRef} className="plant_cards_container">
            <Card>plant 1</Card>
            <Card>plant 2</Card>
            <Card>plant 3</Card>
        </div>
    </div>
  )
}

export default Garden