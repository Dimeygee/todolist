import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


export const Status = () => {


    const completedTask = useSelector(state => state.todos.completed)
    const tasks = useSelector(state => state.todos.todos )

    const [ status, setStatus] = useState()

    useEffect(() => {
    

        if(completedTask.length > 0){
            const getPercentage = (completedTask.length * 100) / tasks.length
            setStatus(getPercentage)
        }
        if(completedTask.length === 0){
            setStatus(0)
        }

    })

    const loaderStyle = {
        width: `${status}%`
        
    }

    return (
        <div className="task_done_container">
            <span className="status_loader" style={loaderStyle}></span>
            { completedTask.length ? <p className="innertext">{`${ completedTask.length } of ${tasks.length} tasks done`}</p> : <p>No task/No task completed yet</p>}
        </div>
    )
}