import {ComponentPropsWithRef,FC} from 'react'

interface Props extends ComponentPropsWithRef<"input">{
    classParent? : string
}

const Input:FC<Props> = ({classParent,className,...props}) => {
  return (
    <div className={`border-2 border-halfWhite p-2 rounded-lg ${classParent ? classParent : " "}`}>
        <input 
        className={`w-full outline-none bg-transparent ${className ? className : " "} text-white text-sm`}
        type="text"
        {...props}
        />
    </div>
  )
}

export default Input