import "./Item.css"
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function Item(props) {
    const{data,deleteTask,editTask} = props ; 

    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <FaTrash className="btn" onClick={()=> deleteTask(data.id)} />
                {/* <button className="btn" onClick={()=> deleteTask(data.id)}>Delete</button> */}
                <FaEdit className="btn" onClick={() => editTask(data.id)} />
                {/* <button className="btn" onClick={() => editTask(data.id)}>Edit</button> */}

            </div>
        
        </div>
    )
}

