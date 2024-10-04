import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link,Form } from "react-router-dom";
import { addTask } from "../../api";

export async function action({request}){
    const fd= await request.formData()
    const title=fd.get("title")
    const task=fd.get("task")
    const status=false;
    var id = "id" + Math.random().toString(16).slice(2)
    addTask({task,title,status,id})
    return  null;
}
export default function AddTask(){
    return(
        <>
        <div className="AddTask">
            <div>
           <Link className="backButton" to=".."> <FaArrowLeft />   </Link> 
            </div>
            <h2>Add Task</h2>
        </div>
        <Form method="POST" replace>
            <label htmlFor="title">Title</label>
                <input name="title" className="title" type="text" />
                <label htmlFor="task">Task</label>
                <textarea name="task" className="textArea" rows={4} cols={40}></textarea>
                <button >ADD</button>
            </Form>
        
        </>
    )
}