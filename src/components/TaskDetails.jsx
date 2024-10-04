import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
export default function TaskDetails(){
    const params=useParams();
    const data=JSON.parse(localStorage.getItem("tasks"))
    var task;
    for(let i=0;i<data.length;i++){
        if(data[i].id===params.id){
            task=data[i]
        }

    }

    


    return(
        <>
        <div className="AddTask">
        <div>
       <Link className="backButton" to=".."> <FaArrowLeft />   </Link> 
        </div>
        <h2>Task Details</h2>
    </div>
            <div className="task-details">
                <h4>
                    {task.title}
                </h4>
                <h5>
                     {task.task}
                </h5>
                <h5 className={task.status?"completed-d":"pending-d"}>
                    {task.status?"Completed":"Pending"}
                </h5>



            </div>
    </>
    )
}
