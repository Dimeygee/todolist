
import { useDispatch } from "react-redux"
import { toggletodo, removeTodo, editTodo } from "../redux/todo/todoslice"
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";




export const Todo = ({ todo }) => {

    const dispatch = useDispatch()

    const handleChange = () => dispatch(toggletodo(todo.id))

    const handleDelete = () => dispatch(removeTodo(todo.id))

    return(
        <div className="todo_container">
            <input type="checkbox" id={`checkbox-${todo.id}`} className="regular-checkbox" onChange={handleChange} checked={todo.checked} />
            <label htmlFor={`checkbox-${todo.id}`}></label>
            <span className={`todo_text ${todo.checked && "checked"}`}>{todo.text}</span>
            <span className="edit_icon"><MdEdit color="#6dc9f791" size={20} /></span>
            <span className="delete_icon" onClick={handleDelete}><FaTimes color="#6dc9f791" size={20} /></span>
        </div>
    )

}