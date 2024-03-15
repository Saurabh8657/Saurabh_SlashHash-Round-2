import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Components/CardComponent";
export default function HomePage() {
  const [ searchInput, setSearchInput ] = useState("");
  const [ data, setData ] = useState([]);
  const fetchFunc = (searchInput) => {
    axios.get(`https://api.quotable.io/search/quotes?query=${searchInput}`)
    .then(res => {
      console.log(res);
      setData(res.data.results);
    })
    .catch(err => console.log(err))
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    fetchFunc(searchInput);
  }
  useEffect(() => {}, []);
  return (
    <div>
      <h2>SlasHash Round 2</h2>
      <form className="mt-3" onSubmit={(e => handlesubmit(e))}>
        <input
          type="text"
          name="search"
          placeholder="search any quotes"
          className="bg-light px-3 pb-2 rounded outline text-dark"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input type="submit" name="search" className="btn btn-primary ms-3"  />
      </form>

      <div className="d-flex justify-content-around flex-wrap gap-3 px-5 mt-5 mb-5">
        {
          data?.map((item)=>{
            return <CardComponent key={item._id} item={item} />
          })
        }
      </div>

    </div>
  );
}



