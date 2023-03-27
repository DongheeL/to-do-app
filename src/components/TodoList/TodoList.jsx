import React, { useContext, useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    // useState의 초기값을 전달할 때 일반함수대신 콜백함수로 전달하면, 맨 처음 렌더링될 때만 콜백함수가 호출되고 리렌더링될때에는 호출되지 않으므로 더 효율적이다.
    const [todos, setTodos] = useState(()=>readTodosFromLocalStorage());
    
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

function readTodosFromLocalStorage(){
    const list = localStorage.list;
    return list ? JSON.parse(list) : [];
}

function getFilteredItems(todos, filter){
    console.log(typeof todos)
    if(filter==='all'){
        return todos;
    }
    return todos.filter((todo) => todo.status===filter);
}