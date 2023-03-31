
import { removecheckedTodo } from "../redux/todo/todoslice"
import { useDispatch } from "react-redux"
import { FaTimes } from "react-icons/fa";




export const CheckedDeleteButton = () => {

    const dispatch = useDispatch()

    const handleRemoveChecked = () => dispatch(removecheckedTodo())


    return (
        <button className="delete_checked_btn" onClick={handleRemoveChecked}>
            <span>Removed checked</span>
            <FaTimes color="#fff" size={20} />   
        </button>
    )
}