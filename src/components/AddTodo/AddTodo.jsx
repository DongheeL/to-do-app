import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}) {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.trim().length===0){
            return;
        }
        onAdd({id:uuidv4(), text: input, status:'active' });
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Add Todo" value={input} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    );
}

