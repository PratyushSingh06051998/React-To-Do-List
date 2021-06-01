import React, { useState } from 'react';


export const AddTodo = (props) => {

    const [title, settitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if (!title || !desc){
            alert("Please enter value")
        }
        props.aadtd(title,desc)
    }

    return (
        <div className = "container my-3">
            <h3>Add a TODO</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" value={title} onChange={(e)=>settitle(e.target.value)} id="title" aria-describedby="Need to develop React JS" />
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" class="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
