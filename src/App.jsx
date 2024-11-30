import { createContext, useContext, useState } from 'react'
import './App.css'
import { Landing } from './components/Landing'
import { ProductCard } from './components/ProductCard'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { WishlistState } from './items'
import { Cart } from './components/Cart'
function App(){
  const data = useRecoilValue(WishlistState)
  return (<div>
        <Landing />
    {data.map((item,index)=><ProductCard key={index} image={item.image} name={item.name} price={item.price} reviews={item.reviews} id={item.id}/>)}
    <Cart />
  </div>)
}

export default App
