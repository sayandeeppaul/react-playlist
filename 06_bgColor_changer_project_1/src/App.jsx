import { useState } from "react"

function App() {
  const [color, setColor] = useState('black')
  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}>
      <div className="flex flex-wrap w-[90%] bg-white relative top-[86%] justify-around mx-auto rounded-lg p-4 gap-8">

        <button className="flex flex-wrap border-2 border-black px-4 py-1 rounded-lg shadow-lg text-white"
          onClick={() => setColor("Black")}
          style={{ backgroundColor: "black" }}>Black</button>

        <button className="flex flex-wrap border-2 border-black px-4 py-1 rounded-lg shadow-lg text-white"
          onClick={() => setColor("Blue")}
          style={{ backgroundColor: "blue" }}>Blue</button>

        <button className="flex flex-wrap border-2 border-black px-4 py-1 rounded-lg shadow-lg text-white"
          onClick={() => setColor("Green")}
          style={{ backgroundColor: "Green" }}>Green</button>

        <button className="flex flex-wrap border-2 border-black px-4 py-1 rounded-lg shadow-lg text-white"
          onClick={() => setColor("Orange")}
          style={{ backgroundColor: "Orange" }}>Orange</button>

        <button className="flex flex-wrap border-2 border-black px-4 py-1 rounded-lg shadow-lg text-white"
          onClick={() => setColor("Red")}
          style={{ backgroundColor: "Red" }}>Red</button>

      </div>
    </div>
  )
}

export default App
