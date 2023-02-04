import React,{useState, useEffect} from 'react'
import FlatCard from './FlatCard'
import { getallflats } from '../http'

const FlatList = () => {

  const [flats , setFlats] = useState([])

    useEffect(() => {
      
        const fetchposts = async () => {
            
            const {data} = await getallflats()
            console.log(data)
            setFlats(data);
            
        }
        fetchposts()
    }, [])
    
  return (
    <div className='m-6'>
        <div className="ml-5 mr-5 grid grid-cols-4 space-x-3 space-y-4">
            {flats.map((p) => (
                <FlatCard key={p._id} flat={p}/>
            )) 

            }
        </div>
    </div>
  )
}

export default FlatList