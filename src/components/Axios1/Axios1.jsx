import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios1(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          console.log(response.data);
          setTodos(response.data);
        })
        .catch(error => {
          console.log(error);
        });
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

export default Axios1;
