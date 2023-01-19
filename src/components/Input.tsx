import {ComponentPropsWithRef,FC} from 'react'

interface Props extends ComponentPropsWithRef<"input">{
    classParent? : string
}

const Input:FC<Props> = ({classParent,className,...props}) => {
  return (
    <div className={` h-fit flex border-[1.5px] border-halfWhite p-2 rounded-lg ${classParent ? classParent : " "}`}>
        <input 
        className={`w-full text-sm outline-none bg-transparent ${className ? className : " "} text-white`}
        type="text"
        {...props}
        />
    </div>
  )
}

export default Input