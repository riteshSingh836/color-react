import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive");

  function changeColor (getColor) {
    setColor(getColor);
  }

  return (
    <>
      <div className="w-full h-screen duration-200 text-center text-2xl p-5" style={{backgroundColor:color}}>
        Welcome to Background Color Changer
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          {/* this inset-x-0 is usally used to center the element */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}} onClick={()=>changeColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "black"}} onClick={()=>setColor("black")}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "violet"}} onClick={()=>setColor("violet")}>Violet</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "olive"}} onClick={()=>setColor("grey")}>Grey</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
