import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Landing from './components/Landing';

function App() {
  
   let data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Home"
  }

  return (
    <>
    <div>
      {
  
         data.currentPage ==="Landing" ?<Landing name = {data.user}  prices ={data.store.map(item => item.price)}/> :
           <Home store ={data.store}  shouldDiscount ={data.shouldDiscount} />
           
      }
        
        
    </div>
    </>
  )
}

export default App
