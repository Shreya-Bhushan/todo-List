"use client"
import React, { useState } from 'react'

const page = () => {
  const[title,settitle]= useState("")
  const[desc,setdesc]= useState("")
  const[mainTask,setMainTask]= useState([])
  
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")

  }
  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask=<h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return(
      <li  key={i} className="flex item-center justify-between mb-5">
        <div className="flex justify-between text-black border-4 text-2xl mb-8 w-1/2">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-medium">{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }} 
      className='bg-red-600 text-white px-4 py-2 rounded font-bold '>
        Delete
      </button>
      </li>
      );
    })
  }
  return (
    <>
    <h1 className='bg-black text-white p-6 text-5xl font-bold text-center'>Shreya's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className="text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter Title Here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input>

      <input type="text" className="text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2" placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      <button className="text-black bg-white px-4 py-3 text-2xl m-5 placeholder:font-bold rounded" >Add Task</button>
    </form>
    
    <div className="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>

    </div>
    

    </>
  )
}

export default page
