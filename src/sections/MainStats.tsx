import Box from '../components/Box'
import ListStats from '../components/ListStats'
import data from '../data/stats.json'

const MainStats = () => {

    const Column = ['Rank','Evolution','Collection','Volume','24h%','7d%','Items']
  return (
    <section className='pt-24 lg:pt-36'>
        <Box>
            <h1 className='text-white font-medium text-lg lg:text-xl mb-6'>Top NFTs</h1>
            <div className='overflow-x-scroll'>
                <table className='text-white'>
                    <thead>
                        <tr>
                            {Column.map((e)=>(
                                <td className='text font-medium pr-4' key={e}>{e}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({...props},i)=>(
                            <ListStats
                            key={i}
                            {...props}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </Box>
    </section>
  )
}

export default MainStats