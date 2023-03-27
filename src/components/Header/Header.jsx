import React, { useContext } from 'react';
import styles from './Header.module.css'
import { MdLightMode, MdNightlight } from "react-icons/md";
import { DarkModeContext, useDarkMode } from '../../context/DarkModeContext';

export default function Header({filters,filter,onFilterChange}) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={`${styles.header}`}>
            <button className={styles.filter} onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdNightlight />}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index)=>
                    <li key={index} >
                        <button 
                            className={`${styles.filter} ${filter===value && styles.selected}`}
                            onClick={()=>onFilterChange(value)}
                        >
                            {value}
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

