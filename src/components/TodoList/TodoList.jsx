import React, { useContext, useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        if(!!localStorage.list){
            const list = JSON.parse(localStorage.list);
            setTodos(list);
        }
    },[])
    
    useEffect(()=>{
        if(todos.length>0){
            localStorage.list = JSON.stringify(todos);
        }else{
            localStorage.removeItem("list");
        }
    },[todos])

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleDelete = (deleted) =>{
        setTodos(todos.filter(val => val.id!==deleted.id))
    }
    const handleUpdate = (updated) =>{
        setTodos(todos.map(todo=>(todo.id===updated.id ? updated : todo )))
    }
    const filtered = getFilteredItems(todos, filter);
    console.log(typeof filtered)
    return (
        <section className={`${styles.container}`}>
            <ul className={styles.list}>
                {!!filtered && filtered.map((item)=>(
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                    
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
            
        </section>
    );
}

function getFilteredItems(todos, filter){
    console.log(typeof todos)
    if(filter==='all'){
        return todos;
    }
    return todos.filter((todo) => todo.status===filter);
}