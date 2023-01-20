import {ComponentPropsWithRef,FC} from 'react'

interface Props extends ComponentPropsWithRef<"input">{
    classParent? : string
    background? : 'black' | 'transparent'
    borderNone? : boolean
}

const Input:FC<Props> = ({classParent,borderNone,background = 'transparent',className,...props}) => {

  let bg = ' ';

  switch (background){
    case 'black' :
      bg = 'bg-black';
      break;
    case 'transparent' :
      bg = 'bg-transparent';
      break;
  }


  return (
    <div className={` h-fit flex ${borderNone ? ' ' : "border-[1.5px] border-halfWhite"} p-2 rounded-lg ${bg} ${classParent ? classParent : " "}`}>
        <input 
        className={`w-full text-sm outline-none bg-transparent ${className ? className : " "} text-white`}
        type="text"
        {...props}
        />
    </div>
  )
}

export default Input