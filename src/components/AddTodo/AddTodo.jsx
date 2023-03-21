import React, { useState } from 'react';

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
        onAdd({id:'고유값', text: input, status:'active' });
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Add Todo" value={input} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    );
}

