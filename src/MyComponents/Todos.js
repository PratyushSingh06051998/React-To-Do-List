import React from 'react'
import {Todo} from "../MyComponents/Todo"


export const Todos = (props) => {
    let todostyle = {
        minHeight: "70vh"
    }

    return (
        <div className="container my-3"  style={todostyle}>
            <h3 className="my-3">To Do's List</h3>
            {props.todoss.length===0 ? "No todos to display" :
            props.todoss.map(
                (tl) =>{
                    return (<><Todo  todopr= {tl} key={tl.sno} onDelete = {props.onDelete} /><hr/></>)
                }
            )
            }
            
        </div>
    )
}
