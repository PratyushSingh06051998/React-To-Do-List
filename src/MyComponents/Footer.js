import React from 'react'

export const Footer = () => {

    let footerstyle = {
        top: "70vh",
        position: "relative",
        width: "100%"
    }

    return (
        <footer className="bg-dark text-light py-3" >
            <p className="text-center">
            Copyright &copy; MyTodolist.com </p>
        </footer>
    )
}
