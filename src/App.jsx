import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full  h-[1200px] w-[2200px] flex">
        <div className=" bg-gray-100  w-1/2 ">
            
        </div>
        <div className="  w-1/2  ">
        <img src="src/Subtract(1).png"></img>
        </div>
      </div>
    </>
  );
}

export default App;
