import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text : string,
    link : string,
    image : string
}

const ExploreCard:FC<Props> = ({image,link,text}) => {
  return (
    <div className='relative overflow-hidden rounded-2xl group before:absolute before:z-10 before:rounded-2xl before:bg-gradient-to-b before:from-[#00000000] before:to-[#00000088] before:inset-0 '>
        <img src={image} className="w-full h-96 md:h-[400px] group-hover:scale-110 relative transition-all rounded-2xl object-cover object-center" alt={text} />
        <div className="absolute bottom-0 p-8 w-full z-20">
            <Link to={link} className="underline text-white80 text-sm">Explore</Link>
            <p className='text-white font-semibold mt-2 w-4/5'>{text}</p>
        </div>
    </div>
  )
}

export default ExploreCard