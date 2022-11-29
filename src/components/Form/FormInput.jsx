import React from 'react'

function FormInput({setFunc,input}) {
  return (
    <div className="flex flex-col py-2">
    <label className="py-2 font-medium" htmlFor={input.LabelFor}>
      {input.label}
    </label>
    <input
    id={input.id}
    placeholder={input.placeholder}
      onChange={(e) => setFunc(e.target.value)}
      className="rounded-lg py-2 border border-blue-200 px-2 focus:border-blue-500"
      type={input.type}
      name={input.id}
    />
  </div>
  )
}

export default FormInput