import { json } from "react-router-dom";

export function addTask(details){
const arr=new Array();
arr.push(details)

if(localStorage.getItem("tasks")){
   const data= JSON.parse(localStorage.getItem("tasks"))
   data.push(details)
   localStorage.setItem("tasks",JSON.stringify(data))

}
else{
    localStorage.setItem("tasks",JSON.stringify(arr))
}




    
}