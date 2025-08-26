
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

const deletetask = (deletetask) => {
const newtasklist = tasks.filter((_,i) => i !== deletetask)
settasks(newtasklist)
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

// const [datauser, setdatauser] = useState()

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())
//     .then((user) => {
//       setdatauser(user);
//     })
// }, []);
// if (!datauser) return <div>Loading...</div>



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
  }}  value={task} className="outline-none bg-white rounded-2xl placeholder:text-center border-1" type="text" placeholder="Type Your Task Here"></input>

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
    {tasks.map((inputvalue,index) =>(<li className="list-disc flex gap-5 items-center justify-center" key={index} style={{color:inputvalue.textcolorchange}}>{inputvalue.textandcolor}
     
      <button onClick={()=>deletetask(index)}
  className="inline-flex items-center px-4 cursor-pointer py-0 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
  <svg
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
  Delete
</button>

    </li>))}


  </ul>
</div>
<div className="pt-15"></div>
    </div>
  </div>
)

}