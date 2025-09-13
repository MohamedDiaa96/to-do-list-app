
'use client'
import React, { use, useEffect, useState } from "react"

export default function Home() {
  const [task,settask] = useState("")
const [tasks,settasks] = useState([])
// const [textcolorchange,settextcolorchange]=useState()

const [taskcolorsets,settaskcolorsets] = useState("#99a1af")

const addingtask = () => {

  if(task.trim()=== "") return
  {
  settasks([...tasks,{text:task,taskcolorsets,textfont,favorites:false}])
  // ,textcolorchange
  settask("")
  }
}

// const deletetask = (deletetask) => {
// const newtasklist = tasks.filter((_,i) => i !== deletetask)
// settasks(newtasklist)
// }
const deletetask = (index) => {
  const newtasklist = [...tasks]  
  newtasklist.splice(index, 1)   
  settasks(newtasklist)          
}




useEffect(() =>{
  const save = localStorage.getItem("tasks")
  if(save){
    settasks(JSON.parse(save))
  }
}, []);

useEffect(() =>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])

const toggleFavorite = (index) => {
  const newTasks = [...tasks]
  newTasks[index].favorites = !newTasks[index].favorites
  settasks(newTasks)
};

  const [editIndex, setEditIndex] = useState(null);

const startEditTask = (index) => {
  setEditIndex(index)
  settask(tasks[index].text)
  // settextcolorchange(tasks[index].textcolorchange)
  settextfont(tasks[index].textfont)
  settaskcolorsets(tasks[index].taskcolorsets)
};

const saveEditTask = () => {
  if (editIndex === null || task.trim() === "") return;
  const updatedTasks = [...tasks]
  updatedTasks[editIndex] = {...updatedTasks[editIndex],text: task,textfont,taskcolorsets} 
  // ,textcolorchange
  settasks(updatedTasks)
  setEditIndex(null)
  settask("")
}

const [showform,setshowform] = useState(true)
const [textfont ,settextfont]= useState('sans-serif')
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

    <div className="h-[10vh] w-[100%] flex justify-center items-center"><h1 className="text-3xl text-cyan-800 font-serif decoration-2 decoration-solid decoration-cyan-600 underline">To Do List App</h1></div>
{/* header  */}
<div className="flex justify-center items-start h-[20vh]">
  <button onClick={()=>{
      setshowform(!showform)
    }} className="bg-blue-600 text-white px-4 py-2 rounded-2xl mt-5"
      >{showform ? "-" : "+"}</button>
      </div>
      {showform &&(
<div className="flex flex-col justify-center items-center gap-2">
  {/* input and button div */}

  {/* <input  onChange={(e) => {settask(e.target.value) 
    console.log(e.target.value)
  }}  value={task} className="outline-none bg-white rounded-2xl placeholder:text-center border-1" type="text" placeholder="Type Your Task Here"></input> */}


  <div className="h-50 w-90 rounded-[10%] shadow-[0px_0px_10px] shadow-gray-500 " style={{backgroundColor:taskcolorsets}}>
<div className="border-b-1 flex justify-center">Task</div>
<div className="flex items-center justify-center w-full h-[90%]">
<input  onChange={(e) => {settask(e.target.value) 
    console.log(e.target.value)
  }}  value={task} style={{fontFamily:textfont}} className="outline-none rounded-2xl placeholder:text-center size-full" type="text" placeholder="Type Your Task Here"></input>
  </div>
  </div>

<div className="flex justify-center items-center flex-col gap-2">
  <button   onClick={() => {
    editIndex === null ? addingtask() : saveEditTask();
  }}
  className="bg-purple-600 w-30 h-10 text-white rounded-2xl cursor-pointer"
> {editIndex === null ? "Add Task" : "Save Edit"}</button>
    <div className="flex justify-center items-center gap-2">
      {/* <span>Text Color</span>
    <input type="color" onChange={(e) =>{
    settextcolorchange(e.target.value) 
  }}></input> */}
  <span>Text Font:</span>
  <span>sans-serif</span><input type="radio"  checked={textfont === 'sans-serif'} onChange={()=>{
settextfont('sans-serif')
  }}></input>
   <span>monospace</span> <input type="radio" checked={textfont === 'monospace'} onChange={()=>{
settextfont('monospace')
  }}></input>
   <span>cursive</span>   <input type="radio"  checked={textfont === 'cursive'} onChange={()=>{
settextfont('cursive')
  }}></input>
  </div>

  <div className="flex items-center justify-center gap-2 ">
    <span>Task Color</span>
        <button type="color" className="bg-gray-400 rounded-4xl h-10 w-10 cursor-pointer shadow-[0px_0px_10px] shadow-gray-400" onClick={()=>{
      settaskcolorsets("#99a1af")
    }}></button>
    <button type="color" className="bg-red-500 rounded-4xl h-10 w-10 cursor-pointer shadow-[0px_0px_10px] shadow-red-500" onClick={()=>{
      settaskcolorsets("#fb2c36")
    }}></button>
        <button className="bg-green-500 rounded-4xl h-10 w-10 cursor-pointer shadow-[0px_0px_10px] shadow-green-500" onClick={()=>{
      settaskcolorsets("oklch(72.3% 0.219 149.579)")
    }}></button>
            <button className="bg-blue-500 rounded-4xl h-10 w-10 cursor-pointer shadow-[0px_0px_10px] shadow-blue-500" onClick={()=>{
      settaskcolorsets("oklch(62.3% 0.214 259.815)")
    }}></button>
            <button className="bg-yellow-500 rounded-4xl h-10 w-10 cursor-pointer  shadow-[0px_0px_10px] shadow-yellow-500" onClick={()=>{
      settaskcolorsets("oklch(79.5% 0.184 86.047)")
    }}></button>
  </div>

</div>

<div className="pt-15"></div>

    </div>
          )}
    </div>

    <div className="flex justify-center items-center pt-15 flex-wrap">
  {/* input value: add user task */}

      <ul id="unlisted" className= "flex gap-4">
    {tasks.map((inputvalue,index) =>(<div key={index} className=" h-full rounded-[10%] shadow-[0px_0px_10px] shadow-gray-500" style={{backgroundColor:inputvalue.taskcolorsets}}>
<div className="flex border-b-1">
  <div className="flex w-[25%] justify-center items-center">

<button
onClick={()=>startEditTask(index)}
className="cursor-pointer"
  // className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-200"
>
  <svg
    className="h-5 w-5 mr-1 self-center items-center"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
    ></path>
  </svg>
</button>

  </div>
  <div className="flex justify-center items-center w-[50%]">
<li>Task-{index + 1}</li>
</div>
<div className="flex w-[25%] justify-center items-center">
        <button onClick={()=>deletetask(index)}
  className="flex items-center h-6 cursor-pointer  transition ease-in-out delay-75  text-sm font-medium rounded-md ">
  <svg
    stroke="currentColor"
    viewBox="0 2 24 24"
    fill="none"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
</button>
</div>
</div>
<li className="list-disc flex gap-5 w-50 h-full items-center justify-center p-4 break-all "  style={{fontFamily:inputvalue.textfont}}>{inputvalue.text}</li>

<div className="flex border-t-1 items-center justify-center">
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


</div>

</div>))}

  </ul>
  </div>
  </div>

)

}