import React, { useEffect, useState } from 'react';

function Page1(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json);
                console.log(todos);
            })
    }, []); 

    function massive() {
        return todos.map((item, i) => {
            if(i > 2) { return null; }
            return (
                <div key={i}>
                    <div>userId: { item.userId }</div>
                    <div>title: { item.title }</div>
                    <div>completed: { item.completed.toString() }</div>
                    <hr/>
                </div>
            )
        });
    }

    return (
        <>
            { todos && todos.length && (
                massive()
            ) }
        </>
    );
}

export default Page1;
