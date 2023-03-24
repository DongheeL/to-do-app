import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                placeholder="Add Todo" value={input} onChange={handleChange}/>
            <button className={styles.button}>Add</button>
        </form>
    );
}

