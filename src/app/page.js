'use client'
import React, { useEffect, useState } from "react"


export default function Home() {
  const [task,settask] = useState("")
const [tasks,settasks] = useState([])
const [textcolorchange,settextcolorchange]=useState()
const addingtask = () => {

  if(task.trim()=== "") return;
  {
  settasks([...tasks,{textandcolor:task,textcolorchange}]);
  settask("")
  }
}



useEffect(() =>{
  const save = localStorage.getItem("tasks");
  if(save){
    settasks(JSON.parse(save));
  }
}, []);
useEffect(() =>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);
//  console.log(tasks)

return (
  <div className="w-full h-full flex flex-col items-center">
    {/* div container */}
    <div className="border-2 border-black w-120 h-full border-dashed mt-5 bg-gray-100">
{/* form border  */}

    <div className="h-[30vh] w-[100%] flex justify-center items-center"><h1 className="text-3xl text-cyan-800 font-serif  decoration-2 decoration-solid decoration-cyan-600 underline">To Do List App</h1></div>
{/* header  */}
<div className="flex justify-center gap-2">
  {/* input and button div */}
  <input  onChange={(e) => {settask(e.target.value) 
    console.log(e.target.value)
  }}  value={task} className="outline-none rounded-2xl placeholder:text-center border-1" type="text" placeholder="Type Your Task Here"></input>

  <button onClick={()=>{
    addingtask()
  //  document.body.style.color=textcolorchange;
    }} className="bg-purple-600 w-30 h-10 text-white rounded-2xl cursor-pointer">Add Task</button>
    <input type="color" onChange={(e) =>{
    settextcolorchange(e.target.value)
  }}></input>
</div>
<div className="pt-15"></div>
<div className="flex justify-center items-center">
  {/* input value: add user task */}
  <ul id="unlisted" className="list-disc">
    {tasks.map((inputvalue,index) =>(
      <li key={index} style={{color:inputvalue.textcolorchange}}>{inputvalue.textandcolor}</li>
    ))}
  </ul>
</div>
<div className="pt-15"></div>
    </div>
  </div>
)

}