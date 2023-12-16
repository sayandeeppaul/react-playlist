import { useState } from "react"
import Tours from "./Tours"
import data from "./data"

function App() {
  const [toursData, setToursData] = useState(data)

  function removeTour(receiveId) {
    const newTours = toursData.filter(tour => tour.id !== receiveId)
    setToursData(newTours)
  }

  if (toursData.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={() => {
          setToursData(data)
        }}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={toursData} removeTour={removeTour} />
    </div>
  )
}

export default App
