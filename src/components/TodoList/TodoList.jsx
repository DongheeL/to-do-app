import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'123',text:'장보기',status:'active'},
        {id:'124',text:'공부하기',status:'active'}
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const onDelete = (todo) =>{
        setTodos(todos.filter(val => val!=todo))
    }
    const onUpdate = (item) =>{
        setTodos(todos=> todos.map(todo=>{
            if(todo==item) {
                return {...todo, status: todo.status=='active'?'inactive':'active'};
            }
            return todo;
        }))
    }

    return <section>
        <ul>
            {todos.map((item)=>(
                <li key={item.id}>
                    <input type={"checkbox"} checked={item.status==='inactive'} onClick={()=>onUpdate(item)} /> 
                    {item.text}
                    <button onClick={()=>onDelete(item)}>
                    <FaTrashAlt />
                    </button>
                </li>
            ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
        
    </section>;
}