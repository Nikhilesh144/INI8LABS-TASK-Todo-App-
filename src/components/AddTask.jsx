import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link,Form, redirect, useParams, useSearchParams } from "react-router-dom";
import { addTask } from "../../api";

export async function action({request}){
    const fd= await request.formData()
    const title=fd.get("title")
    const task=fd.get("task")
    const status=false;
    var id = "id" + Math.random().toString(16).slice(2)
    if(title.length<3 || task.length<3){
       return redirect("/add?please enter valid title or task ")

    }
    addTask({task,title,status,id})
    
    return  redirect("/");
}
export default function AddTask(){
    const [message]=useSearchParams()
    
    return(
        <>

        
        <div className="AddTask">
            <div>
           <Link className="backButton" to=".."> <FaArrowLeft />   </Link> 
            </div>
            <h2>Add Task</h2>
        </div>
        <Form method="POST" replace>
         { message &&<p className="warning">{ message}</p>}
            <label htmlFor="title">Title</label>
                <input name="title" className="title" type="text" />
                <label htmlFor="task">Task</label>
                <textarea name="task" className="textArea" rows={4} cols={40}></textarea>
                <button >ADD</button>
            </Form>
        
        </>
    )
}