import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'123',text:'장보기',status:'active'},
        {id:'124',text:'공부하기',status:'active'}
    ]);
    const [status, setStatus] = useState('all');
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleDelete = (deleted) =>{
        setTodos(todos.filter(val => val.id!==deleted.id))
    }
    const handleUpdate = (updated) =>{
        setTodos(todos.map(todo=>(todo.id===updated.id ? updated : todo )))
    }

    return <section>
        <ul>
            <li>
                <button onClick={()=>setStatus('all')}>all</button>
            </li>
            <li>
                <button onClick={()=>setStatus('active')}>active</button>
            </li>
            <li>
                <button onClick={()=>setStatus('completed')}>completed</button>
            </li>
        </ul>
        <ul>
            {todos.map((item)=>(
                (status==='all' || status==item.status) &&
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                
            ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
        
    </section>;
}