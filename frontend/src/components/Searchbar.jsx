import React, { useState } from 'react'
import { Input } from './ui/input.jsx';
import {Button} from "./ui/button.jsx"

function Searchbar(props) {
  const[val,setVal] = useState("")



  async function fetchData(){
      const response = await fetch(`http://127.0.0.1:8000/search?city=${val}`)
      const data = await response.json()
      console.log(data)
      props.func(data)
    }

    

  function handleCityChange(e){
    const newValue = e.target.value
    setVal(newValue)
  }

  return (
    
    <div className="text-white font-extrabold flex items-center justify-center my-10 h-15">
          <Input value={val} onChange={handleCityChange} placeholder="Search For Your City" className="w-50 rounded-none"></Input>
          <Button onClick={fetchData} className="mx-5 bg-white text-black hover:bg-gray-200 rounded-none">Search</Button>
    </div>
  )
}

export default Searchbar