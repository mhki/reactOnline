import React,{useState, useEffect} from 'react'
import {create} from '../api-tasks'



const CreateTask = () =>{
    const [values, setValues] = useState({
        taskName:'',
        date:'',
        time:'',
        error:'',
        success: false
    })
    
    const handleChange = name => event =>{
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () =>{
        let taskData = {
            taskName:values.taskName,
            date:values.date,
            time:values.time
        }

        console.log(taskData)

        create(taskData).then(data=>{
            if (data.error){
                setValues({...values, error:data.error})
            }else{
                setValues({...values, success:true})
            }
        })
    }

    useEffect(()=>{
        if(values.success){
            setValues({...values, taskName:'', date:'', time:''})
        }
    },[values])

    return (
        <>
           <form className="add-form" onSubmit={clickSubmit} >
               {values.error && <p>{values.error}</p>}
              <div className="form-control">
                <label className="form-label">Task</label>
                <input type="text" placeholder="Task" value={values.taskName} onChange={handleChange('taskName')}/>
              </div>
              <div className="form-control">
                <label className="form-label">Date</label>
                <input type="date" placeholder="Date" value={values.date} onChange={handleChange('date')}/>
              </div>
              <div className="form-control">
                <label className="form-label">Time</label>
                <input type="time" placeholder="Time" 
                value={values.time} onChange={handleChange('time')}/>
              </div>
              <button className="btn btn-block" type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateTask