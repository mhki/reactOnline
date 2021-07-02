import React,{useState} from 'react'
import Header from './components/Header'
import AllTasks from './components/AllTasks'
import CreateTask from './components/CreateTask'

const MainApp = () =>{
    const [showAddTask, setShowAddTask] = useState(false)


    const toggle = ()=>{
        setShowAddTask(!showAddTask)
    }

    return (
        <div className="container">
            <Header onAdd={toggle} showAdd={showAddTask}/>
            {showAddTask && (
                <CreateTask/>
            )}
            <div className="task">
                <AllTasks/>
            </div>
        </div>
    )
}

export default MainApp