import React from "react";
import logo from "../images/logo.jpeg"
import { json, Link, useSearchParams } from "react-router-dom";

import { IoIosAdd } from "react-icons/io";
import TaskItem from "./TaskItem";
export default function Home(){
    const [searchParams,setSearchParams]=useSearchParams()
    const date=new Date()
    const day=date.getDate()
    const[task,SetTask]=React.useState( JSON.parse(localStorage.getItem("tasks"))||[]);
    function handleCheck(id){
          SetTask(prev=>{
            return prev.map(item=>{
                return item.id===id?{...item,status:!item.status}:item
            })
          })
    }
    function handleDelete(id){
        SetTask(prev=>prev.filter(item=>item.id !==id))
      
    }
    React.useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task))

    },[task])
   const type=searchParams.get("type")
   var displayedTasks;
   if(type && type==="completed"){
      displayedTasks=task.filter(task=>task.status ===true)
   }
   else if(type && type==="pending"){
    displayedTasks=task.filter(task=>task.status ===false)
   }
   else{
        displayedTasks=task;
   }
 

    const taskArr=displayedTasks.map(task=>{
        return(
            <TaskItem 
            key={task.id}
            title={task.title}
            check={handleCheck}
            delete={handleDelete}
            status={task.status}
            id={task.id}

            
            
            />
        )
    })
  
    
    

    return(
        <div>
                <div className="header">
                     <h1>TODO APP</h1>
                  <div className="date">
                    <h2>  {day}</h2>
                  </div>
                </div>
                {task.length>0 ?
                     <div>
                      <div className="filters">
                        <Link to="?type=completed"><h5 className={`completedf ${type==="completed"?"selected":null}`}>completed</h5></Link>
                        <Link to ="?type=pending"><h5  className={`pendingf ${type==="pending"?"selected":null}`} >Pending</h5></Link>
                        <Link to=""><h5>Clear </h5></Link>
                      </div>

                    {taskArr}
                    <Link to="/add">
                    <div className="add--task">
                    <IoIosAdd color="white" size={40} />
                    </div>
                    </Link>
                    
                    </div>:
                    <>
                
                    <h2 className="message">oops! You don't have any Tasks</h2>
                    <Link to="add">
                   <div className="create" > create one</div>
                 </Link>
                 </>
                
                }

                  
        </div>
    )


    }