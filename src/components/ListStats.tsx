import React, { FC } from 'react'
import { floatFormat, formatRupiah } from '../utils/func';

const Rank = ({rank} : {rank : number}) => {
  
  const style = 'min-w-[28px] w-7 mx-auto'
  switch(rank){
    case 1 : 
      return <img src='/assets/icons/rank-1.svg' className={style} alt='rank-1'/>;
    case 2 :
      return <img src='/assets/icons/rank-2.svg' className={style} alt='rank-2'/>;
    case 3 :
      return <img src='/assets/icons/rank-3.svg' className={style} alt='rank-3'/>;
    default : 
      return <>{rank}</>
  }
}

const Evolution = ({ev} : {ev : number}) => {

  let icon = 'equals.svg'

  if(ev > 0){
    icon = 'up.svg'
  }else if(ev < 0){
    icon = 'down.svg'
  }
  
  return (
    <div className='flex flex-col items-center'>
      <img src={`/assets/icons/${icon}`} className="w-3" alt={icon} />
      {ev != 0 && (
        <p className='mt-1'>{ev < 0 ? ev*-1 : ev}</p>
      )}
    </div>
  )
}

const Percentage = ({percen} : {percen : number}) => {
  let plus = percen > 0 ? true : false
  return (
    <p className={ plus ? 'text-[#22EE98]' : 'text-[#FF1515]'}>{plus && '+'}{floatFormat(percen,2)}%</p>
  )
}

interface Props{
    rank : number,
    evolution : number,
    name : string,
    image : string,
    volume : number,
    inday : number,
    inweek : number,
    items : number
}

const ListStats:FC<Props> = ({rank,evolution,image,inday,inweek,items,name,volume}) => {

    const style = 'pr-10 md:pr-16 lg:pr-24 text-sm py-2'
  return (
    <tr>
        <td className={`${style} text-center h-7`}>
          <Rank
          rank={rank}/>
        </td>
        <td className={style}>
          <Evolution
          ev={evolution}/>
        </td>
        <td className={`flex items-center space-x-3 ${style}`}>
            <img src={image} alt={name} className="w-7 h-7 rounded-full"/>
            <p className="text-sm whitespace-nowrap">{name}</p>
        </td>
        <td className={style}>{formatRupiah(volume)}</td>
        <td className={style}>
          <Percentage
          percen={inday}/>
        </td>
        <td className={style}>
          <Percentage
          percen={inweek}/>
        </td>
        <td className={style}>{items}</td>
    </tr>
  )
}

export default ListStats