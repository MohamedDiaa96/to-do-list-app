
'use client'
import React, { useEffect, useState } from "react"

export default function Home() {
  const [task,settask] = useState("")
const [tasks,settasks] = useState([])
const [textcolorchange,settextcolorchange]=useState()

const addingtask = () => {

  if(task.trim()=== "") return;
  {
  settasks([...tasks,{textandcolor:task,textcolorchange,favorites:false}]);
  settask("")
  }
}

// const deletetask = (deletetask) => {
// const newtasklist = tasks.filter((_,i) => i !== deletetask)
// settasks(newtasklist)
// }
const deletetask = (index) => {
  const newtasklist = [...tasks];  
  newtasklist.splice(index, 1);   
  settasks(newtasklist);          
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

const toggleFavorite = (index) => {
  const newTasks = [...tasks]
  newTasks[index].favorites = !newTasks[index].favorites
  settasks(newTasks)
};

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
  <div className="w-full h-full flex flex-col items-center mb-5">
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

    </div>
    <div className="flex justify-center items-center pt-15">
  {/* input value: add user task */}

      <ul id="unlisted" className= "flex gap-4">
    {tasks.map((inputvalue,index) =>(<div key={index} className=" bg-gray-400 h-full ">
<li className="border-b-1 flex justify-center">Task-{index + 1}</li>
<li className="list-disc flex gap-5 w-50 h-full items-center justify-center p-4 break-all "  style={{color:inputvalue.textcolorchange}}>{inputvalue.textandcolor}</li>
<div className="flex border-t-1 items-center">
<label className="">
  <input type="checkbox" checked={inputvalue.favorites}  onChange={() => toggleFavorite(index)} className="peer hidden" />
  <div className="group flex w-fit cursor-pointer items-center gap-2 overflow-hidden  fill-none p-2 px-3 font-extrabold text-amber-500 transition-all peer-checked:fill-amber-500 peer-checked:hover:scale-[120%] active:scale-90">
    <div className="z-10 transition group-hover:translate-x-4"></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 transition duration-500 group-hover:scale-[150%]"
    >
      <path
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
    </svg>
  </div>
</label>

      <button onClick={()=>deletetask(index)}
  className="inline-flex items-center h-6 px-4 cursor-pointer py-0 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md ">
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
</div>
</div>))}


  </ul>
  </div>
  </div>
)

}