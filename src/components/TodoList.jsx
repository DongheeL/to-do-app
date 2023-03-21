import React from "react";

export default function TodoList() {
    const list = ['장보기','공부하기'];
    return (
        <ul>
            {list.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    )
}