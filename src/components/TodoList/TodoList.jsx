import React, { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'123',text:'장보기',status:'active'},
        {id:'124',text:'공부하기',status:'active'}
    ]);
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos, {id:input,text:input.trim(), status:'active'}]);
        setInput('');
    }

    return <section>
        <ul>
            {todos.map((item)=>{
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add Todo" value={input} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    </section>;
}