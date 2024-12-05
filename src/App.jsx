import { createContext, useContext, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing'
import { ProductCard } from './components/ProductCard'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { WishlistState } from './items'
import { Cart } from './components/Cart'
function App(){
  const data = useRecoilValue(WishlistState)

  function sendGradient(id) {
    switch (id) {
      case 1:
        return 'from-red-700 to-black';
      case 2:
        return 'from-gray-400 to-black';
      case 3:
        return 'from-yellow-800 to-black';
      case 4:
        return 'from-[hsl(210_30%_58%)] to-black';
      case 5:
        return 'from-yellow-500 to-black';
      case 6:
        return 'from-teal-400 to-black';
      default:
        return 'from-gray-400 to-gray-800'; // Default gradient
    }
  }

  return (<Router>
    <Routes>
      <Route path='/' element={
      <div>
        <Landing />
        {data.map((item,index)=><ProductCard key={index} image={item.image} name={item.name} price={item.price} reviews={item.reviews} id={item.id}
        gradient = {sendGradient(item.id)}/>
        )}
        <Cart />
      </div>}>
    </Route>
      <Route path='/wishlist' element={data.map((item,index)=><ProductCard key={index} image={item.image} name={item.name} price={item.price} reviews={item.reviews} id={item.id} gradient = {sendGradient(item.id)} />)}></Route>
      <Route path='/cart' element = {<Cart />}></Route>
    </Routes>
  </Router>)
}


export default App
