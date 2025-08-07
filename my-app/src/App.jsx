import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  let varr = ['ddd' ,'sss']
  const showCompany = (name, revenue) => {
    return <div id={name}> {name} makes {revenue} every Year  </div>
  }

  const getClassName = (temperature) => {

    if (temperature<15) {
      return <div id="weatherBox" class="freezing">fdf</div>
    } else if (temperature > 15 && temperature < 30) {
      return <div id="weatherBox" class="fair">dfd</div>

    }else{
     return <div id="weatherBox" class="hell-scape"></div>
    }
  }
  let temp = 50;
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {
          companies.map(el => showCompany(el.name, el.revenue))
        }
      </div>
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {
              varr.map(el => <div>{el}</div> )
        }
      </div>
    </div>
  )
}

export default App





