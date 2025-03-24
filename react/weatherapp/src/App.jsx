

import React from 'react'
import Card from './components/Card'

const App = () => {

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // 765ede317af00990bdae38b9d2b18c42
  // https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=765ede317af00990bdae38b9d2b18c42
  
  return (
    <>
      <div className="con"> 
        <Card/>

      </div>
    </>
  )
}

export default App
