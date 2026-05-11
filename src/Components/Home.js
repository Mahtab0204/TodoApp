import React,{useState} from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid';

  
const Home = () => {

  const setNewTodo=(todos)=>{

  setTodos((previousTodos)=>{
    return [...previousTodos,{id: uuidv4(),todo:todos}]
  })}

  const handleRemoveTodo=(id)=>{

    setTodos((previousTodos)=>{
      const updatedTodos=previousTodos.filter((todo)=>{
        return todo.id!==id;
      })
      return updatedTodos;
    })
  }

  const [todos,setTodos]=useState([]);
  return (
    <div className={style.container}>
      <h1 style={{color:'Skyblue'}}>Todo App</h1>
      <NewTodo getNewTodo={setNewTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
