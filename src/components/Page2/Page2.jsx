import React, { Component } from 'react';

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.setState({ todos: json });
                console.log(this.state);
            })
    }
    
    massive = () => {
        return this.state.todos.map((item, i) => {
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

    render() {
        return (
            <>
                { this.state.todos && this.state.todos.length && (
                    this.massive()
                ) }
            </>
        );
    }
}

export default Page2;