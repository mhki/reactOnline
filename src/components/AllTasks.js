import React,{useState,useEffect} from 'react'
import {list} from '../api-tasks'


const AllTasks = () =>{
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data)=>{
            if(data.error){
                console.log("Some error occured yoo!")
            }else{
                setTasks(data)
            }
        })

        return function cleanUp(){
            abortController.abort()
        }
    }, [])

    return (
        <React.Fragment>
            {tasks.map((task,i)=>(
                <div className="task" key={i}>
                    <h3>{task.taskName}</h3>
                    <p>{task.date} at {task.time}</p>
                </div>
            ))}
        </React.Fragment>
    )
}

export default AllTasks