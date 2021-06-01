import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import React, { useState, useEffect } from 'react';
import {AddTodo} from "./MyComponents/AddTodo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from "./MyComponents/About"



function App() {

  let initTodo;
  if(localStorage.getItem("todosarray")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todosarray"));
  }
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

    localStorage.setItem("todosarray",JSON.stringify(todosarray))
  }

  const [todosarray, settodosarray] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todosarray",JSON.stringify(todosarray))
    
  }, [todosarray])

  return (
    <>
    <Router>
      <Header title="Todo's List" issearch={false}/>

      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" render = {() => {
            return (
            <>
            <AddTodo aadtd = {aadtd}/>
            <Todos todoss={todosarray} onDelete = {onDelete} />
            </>)
          }}>
          </Route>
        </Switch>

      
      <Footer/>
      </Router>
    </>
  );
}

export default App;
