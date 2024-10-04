import React from "react";
import logo from "../images/logo.jpeg"
import { json, Link } from "react-router-dom";

import { IoIosAdd } from "react-icons/io";
import TaskItem from "./TaskItem";
export default function Home(){
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
        console.log("deleted"+id)
        SetTask(prev=>prev.filter(item=>item.id !==id))
      
    }
    React.useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task))

        if(task.length===1 && task[0]===null){
          localStorage.clear
        }
    },[task])
   
    const taskArr=task.map(task=>{
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

                    {taskArr}
                    <Link to="/add">
                    <div className="add--task">
                    <IoIosAdd color="white" size={40} />
                    </div>
                    </Link>
                    
                    </div>:
                 <Link to="add">
                    <h2 className="message">oops! You don't have any Tasks</h2>
                  <div className="create" > create one</div>
                 </Link>
                
                }

                  
        </div>
    )


    }