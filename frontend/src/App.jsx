import Searchbar from './components/Searchbar'
import HeroSection from './components/HeroSection'
import PropertyCard from './components/PropertyCard'
import { useState } from 'react'

function App() {

  const[houses,setHouses] = useState({
    city:"",
    results:[],
  })

  function getData(data){ 
    setHouses(data)
  }

  return (
    <>
      <div className="min-h-screen bg-black py-24">
      <div className="flex flex-col items-center">
        <HeroSection />
        <Searchbar func={getData} />
      </div>
      {houses.results.length > 0 ? 
            <div className="grid grid-cols-3 justify-items-center gap-6 px-6">
          {houses.results.map((house) => (
            <PropertyCard key={house.id} house={house} />
          ))}
        </div> : "no results found"}
        
        
    </div>
    </>
  )
}

export default App
