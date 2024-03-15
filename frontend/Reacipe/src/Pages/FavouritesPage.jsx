import axios from 'axios';
import { useEffect, useState } from 'react'
import FavCard from '../Components/FavCard';

export default function FavouritesPage() {
  const [ data, setData ] = useState([]);
  const fetchFunc = () => {
    axios.get(`http://localhost:3001/favourites/`)
      .then(res => {
        console.log(res.data.result);
        setData(res.data.result)
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchFunc()
  }, []);
  return (
    <>
    <h2>Favourites</h2>
    <div className="d-flex justify-content-around flex-wrap gap-3 px-5 mt-5 mb-5">
      {
        data?.map((item)=>{
          return <FavCard key={item.id} item={item} />
        })
      }
    </div>
    </>
  )
}
