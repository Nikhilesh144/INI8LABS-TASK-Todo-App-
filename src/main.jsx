import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import AddTask,{action}  from './components/AddTask.jsx'
import TaskDetails from './components/TaskDetails.jsx'

const router=createBrowserRouter(createRoutesFromElements(
        <>
         <Route  path="/" element={<Home />} />
         <Route path='add'element={<AddTask />} action={action}/>
         <Route path='Taskdetails/:id' element={<TaskDetails/>}/>
        </>
       
        
        
      


))
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
