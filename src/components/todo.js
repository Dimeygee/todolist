
import { useDispatch, useSelector } from "react-redux"
import { toggletodo, removeTodo, editTodo } from "../redux/todo/todoslice"
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";




export const Todo = ({ todo }) => {

    const dispatch = useDispatch()

    const { id } = todo

    const [ edit, isEdit ] = useState(false)
    const [ value, setValue ] = useState("")

    const handleChange = () => dispatch(toggletodo(todo.id))

    const handleDelete = () => dispatch(removeTodo(todo.id))

    const todos = useSelector(state => state.todos.todos.find(todo => todo.id === id))

    const handleClick = () => {
        dispatch(editTodo({id:todo.id, text:value }))
        isEdit(!edit)
    }


    const handleEdit = () => {
        isEdit(!edit)
        setValue(todos.text)
    }


    return(
        <div className="todo_container">
            { edit ? 
                (
                    <div className="edit_container">
                        <input type="text" value={value}  className="editinput" onChange={e => setValue(e.target.value)}/>
                        <button className="add_btn" onClick={handleClick}>+</button>
                        <button className="x_edit" onClick={() => isEdit(false)}>x</button>
                    </div>
                )
            : (
                <>
                    <input type="checkbox" id={`checkbox-${todo.id}`} className="regular-checkbox" onChange={handleChange} checked={todo.checked} />
                    <label htmlFor={`checkbox-${todo.id}`}></label>
                    <span className={`todo_text ${todo.checked && "checked"}`}>
                        {todo.text}
                    </span>
                    <span className="edit_icon" onClick={handleEdit}><MdEdit color="#6dc9f791" size={20} /></span>
                    <span className="delete_icon" onClick={handleDelete}><FaTimes color="#6dc9f791" size={20} /></span>
                </>
            ) }
            
        </div>
    )

}