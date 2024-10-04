import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function TaskItem(props){
    return(
        
        <div className="tasks-parent">
         
                <div className="status">
                    <Link to={`Taskdetails/${props.id}`}>
                    <h5 className={props.status?"completed":""}>{props.title}</h5>
                    </Link>
                   
                    
                    <div className="options">
                    <CiCircleCheck onClick={()=>props.check(props.id)}  className={props.status?"done":""} />   
                    <MdDeleteOutline onClick={()=>props.delete(props.id)} />



                    </div>
                </div>
              
            </div>
           
    )
}