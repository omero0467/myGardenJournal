import React, { useState } from 'react'
import InfoBtn from './InfoBtn'

function PlantCard({plant}) {
    const [descriptiveText, setDescriptiveText] = useState('')
    let name = plant.name
  if (Array.isArray(name)&&name.length>1){
      // console.log(name);
       name= name.join(', ')
    }
    function handleClick(event, secKeyName) {
        setDescriptiveText(()=>{
            const des = secKeyName?plant[event.target.value][secKeyName]:plant[event.target.value]
            const bol = secKeyName?true:false
            return {text: des, bol:bol}})
    }
  return (
    <>

    <div className="PlantCard flex flex-col font-sans w-min">
      <div className="flex-none h-48 relative">
        <img src={plant.img} alt="" className="absolute inset-0 w-full h-full object-top object-cover" loading="lazy" />
      </div>
      <form className=" p-4">

        <div className="flex justify-between">
          <h1 className="text-lg font-semibold text-slate-900">
            {name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            {plant.categoris}
          </div>
        </div>
        <div className="border-blue-600 pt-2 pl-4 border-t text-sm font-medium text-slate-700 mt-2">
            {plant.climat}
          </div>

        <div className="flex flex-col sm: items-baseline mt-2 mb-6 pb-6 border-b-2 border-slate-200">
          <div className="items-baseline space-x-2 flex mb-3 text-sm">
          <InfoBtn handleClick={handleClick} keyName={'watering'} title={'Watering'}/>
          <InfoBtn handleClick={handleClick} keyName={'lightIdeal'} title={'Sunlight'}/>
          <InfoBtn handleClick={handleClick} keyName={'disease'} title={'Disease'}/>
          <InfoBtn handleClick={handleClick} keyName={'heightPotential'} secKeyName={'cm'} title={'Potential'}/>
      </div>

        <p className="text-sm border-grey-600 pt-2 pl-4 w-full border-t-2 text-amber-800">
           {!descriptiveText&&'click '}{descriptiveText.bol&&'Height Potenial:'} {descriptiveText.text} {descriptiveText.bol&&'cm'}
        </p>

        </div>

        <div className=" space-x-4 mb-6 text-sm font-medium">
          <div className="  space-x-4">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              Add to Garden
            </button>
          </div>
       </div>
      </form>
    </div>
    </>
  )
}

export default PlantCard