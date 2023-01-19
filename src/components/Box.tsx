import {FC,ComponentPropsWithRef} from 'react'

interface Props extends ComponentPropsWithRef<"div">{}

const Box:FC<Props> = ({children,className}) => {
    return (
        <div className={`px-4 lg:max-w-6xl lg:mx-auto ${className ? className : " "}`}>
            {children}
        </div>
    )
}

export default Box