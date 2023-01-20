import React, { ComponentProps, FC, useState } from 'react'

interface Props extends ComponentProps<"input"> {
    label : string
}

const Checkbox:FC<Props> = ({className,label}) => {

    const [checked,setChecked] = useState(false);

  return (
    <div className={`flex space-x-2 items-center ${className ? className : ' '}`}>
        <button 
        onClick={()=>setChecked(!checked)}
        className={`border-[1.5px] h-3 w-3 rounded-sm border-white80 ${checked ? "bg-white" : " "}`} />
        <input 
        onChange={(e)=>setChecked(e.target.checked)}
        checked ={checked}
        type="checkbox" className='hidden' id={label}/>
        <label htmlFor={label} className="text-sm text-white80 font-medium cursor-pointer whitespace-nowrap">{label}</label>
    </div>
  )
}

export default Checkbox