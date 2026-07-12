import React from 'react'
import {Button} from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.jsx";

function PropertyCard(props) {


  return (
 <Card className="w-96 max-w-full overflow-hidden bg-zinc-900 border-zinc-800 text-white">
  <img
    src={props.house.image}
    alt="Studio"
    className="h-48 w-full object-cover"
  />

  <CardHeader>
    <CardTitle>{props.house.title}</CardTitle>
    <CardDescription className="text-zinc-400">
      
    </CardDescription>
  </CardHeader>

  <CardContent>
    <p className="text-2xl font-bold text-blue-400">{props.house.price}$/month</p>
    <p className="mt-2 text-zinc-300">
      {props.house.rooms} {"room(s)"} • {props.house.furnished ? "Furnished" : "Not Furnished"}
    </p>
  </CardContent>

  <CardFooter>
      <a target="_blank" href={"https://kamernet.nl" + props.house.link}>
        <Button className="w-full bg-white text-black hover:bg-zinc-200">View Listing</Button>
      </a> 
  </CardFooter>
</Card>
  )
}

export default PropertyCard
