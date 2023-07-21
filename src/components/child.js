import React from "react"

const Child = (props) => {
    return (
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {props.todos.map((todo, index) => (
                    <li key={index}>
                        {todo.task} 
                        {!todo.completed && (
                            <button onClick={() => props.handleChange(index)}>
                                Complete
                            </button>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Child;