import React from "react";
import Child from "./child";

const Parent = () => {
    const sample = [
        {
            task : "Learn React",
            taskCompleted : false
        },
        {
            task : "Build a React app",
            taskCompleted : false
        },
        {
            task : "Deploy the React app",
            taskCompleted : false
        }
    ];
    const [todos, setTodos] = React.useState(()=>sample);

    const handleChange = (id) => {
        const newTodos = todos.map((todo,index) => {
            if (index === id) {
              todo.completed = true;
            }
            return todo;
          });
          setTodos(newTodos);
    }   

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child todos={todos} handleChange={handleChange}/>
        </div>
    )
}

export default Parent;