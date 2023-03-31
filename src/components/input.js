import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todo/todoslice"
import { nanoid } from "@reduxjs/toolkit";


export const TextInput  = () => {

    const [ value , setValue ] = useState()

    const dispatch = useDispatch()

    const handleClick = e => {
        if(value === "") return 
        dispatch(addTodo({ id: nanoid(), text: value, checked: false }))
        setValue("")
    }

    return (
        <div className="txt_container">
            <input onChange={e => setValue(e.target.value)} value={value} />
            <button className="add_btn" onClick={handleClick}>+</button>
        </div>
    )

}