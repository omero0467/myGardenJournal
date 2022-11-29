import React from 'react'

function InfoBtn({title,handleClick,keyName,secKeyName}) {
  return (
    <label>
    <input onClick={(event)=>{handleClick(event,secKeyName)}} className="sr-only peer" name="size" type="radio" value={keyName} defaultChecked />
    <div className=" px-2 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
      {title}
    </div>
  </label>
  )
}

export default InfoBtn