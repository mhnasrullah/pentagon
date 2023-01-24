import { ComponentProps, FC } from "react";
import { Link } from 'react-router-dom';

interface Props extends ComponentProps<"button">{
    as : "link" | "button",
    styled : "primary" | "secondary",
    to? : string,
    smallPadding? :boolean
}

const Button:FC<Props> = ({children,className,styled,as,to,smallPadding,...props}) => {

    let Style = " ";
    let defaultStyle = `py-2 ${smallPadding ? "px-3" : "px-8"} font-medium text-sm border-[1.5px] rounded-lg`

    switch (styled) {
        case "primary" : 
            Style = `${className ? className : " "} border-blue bg-blue hover:bg-secondBlue transition-all hover:border-secondBlue text-white ${defaultStyle}`;
            break;
        case "secondary" : 
            Style = `${className ? className : " "} border-blue bg-trans text-white hover:bg-[#ffffff33] transition-all ${defaultStyle}`;
            break;
    }

    if(as === "button"){
        return (
            <button
            className={Style}
            {...props}
            >{children}</button>
        )
    }else if(as === "link"){
        if(to){
            return (
                <Link
                to={to}
                className={`${Style} text-center`}>{children}</Link>
            )
        }else{
            return (
                <>To property is required</>
            )
        }
    }

    return (
        <></>
    )
}

export default Button