import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo"


function App() {

  const aadtd = (title,desc) =>{
    let sno
    if (todosarray.length ==0){
      sno=1
    }else{
      sno = todosarray[todosarray.length-1].sno
    }
    let zz = {
      sno:sno,
      title:title,
      desc:desc
    }
    settodosarray([...todosarray,zz])
  }
  const onDelete = (td) =>{
    console.log(td)

    settodosarray(todosarray.filter((e)=>{
      return e!==td
    }))
  }

  const [todosarray, settodosarray] = useState([
    {
      sno : 1,
      title : "Learn React",
      desc : "Learn React to get good placements"
    },
    {
      sno : 2,
      title : "Learn DS Algo",
      desc : "Learn React to get good placements"
    },
    {
      sno : 3,
      title : "Learn Javacript",
      desc : "Learn React to get good placements"
    }
  ]);

  return (
    <>
      <Header title="Todo's List" issearch={false}/>
      <AddTodo aadtd = {aadtd}/>
      <Todos todoss={todosarray} onDelete = {onDelete} />
      <Footer/>
    </>
  );
}

export default App;
