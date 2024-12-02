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
  return (<Router>
    <Routes>
      <Route path='/' element={
      <div>
        <Landing />
        {data.map((item,index)=><ProductCard key={index} image={item.image} name={item.name} price={item.price} reviews={item.reviews} id={item.id}/>)}
        <Cart />
      </div>}>
    </Route>
      <Route path='/wishlist' element={data.map((item,index)=><ProductCard key={index} image={item.image} name={item.name} price={item.price} reviews={item.reviews} id={item.id}/>)}></Route>
      <Route path='/cart' element = {<Cart />}></Route>
    </Routes>
  </Router>)
}


export default App
