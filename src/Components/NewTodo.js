import React,{useState} from 'react'
import style from './NewTodo.module.css'

const NewTodo = (props) => {
   
    const [todo,setTodo]=useState({
        title: "",
        desc: ""
    })

    const {title,desc}=todo;

  const handleChange=(e)=>{
     setTodo((oldTodo)=>{
        return {...oldTodo,[e.target.name]:e.target.value}
     })
   }


    const handleSubmit=(e)=>{
    e.preventDefault();
  
    const {title,desc}=todo;
    if(title.trim()===""||desc.trim()==="") {
        alert("Please fill all the fields");
        return;
    } 
    else{
        props.getNewTodo(todo);
    }
    setTodo({
        title:"",
        desc:""
    })


}


  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
        </div>
         <div className={style["form-field"]}>
            <label htmlFor="description">Description:</label>
            <textarea  id="desc" name="desc" value={desc} onChange={handleChange}/>
        </div>
        <button className={style.button}type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
