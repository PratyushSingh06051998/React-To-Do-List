import React from 'react'

export const Todo = (tt) => {
    return (
        <div>
            <h4>{tt.todopr.title}</h4>
            <p>{tt.todopr.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={ () => {tt.onDelete(tt.todopr)}} >Delete</button>
        </div>
    )
}
