import { FC } from "react"
import Button from "../Button"

interface Props {
    name : string,
    text : string,
    to : string
}

const HelpCard:FC<Props> = ({name,text,to}) => {
  return (
    <div className="rounded-2xl bg-secondBlack p-4 text-center">
        <h2 className="text-white font-medium text-lg lg:text-xl">{name}</h2>
        <p className="text-xs text-white80 min-h-[72px] mt-4">{text}</p>
        <Button
        className="w-full block"
        as="link"
        to={to}
        styled="primary"
        >Read More</Button>
    </div>
  )
}

export default HelpCard