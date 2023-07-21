import React from "react";
import Child from "./child";

const Parent = () => {
    const sample = [
        {
            task : "Learn React",
            todo : "not completed"
        },
        {
            task : "Build a React app",
            todo : "not completed"
        },
        {
            task : "Deploy the React app",
            todo : "not completed"
        }
    ];
    const [todos, setTodos] = React.useState(()=>sample);

    const handleChange = (id) => {
        const newTodos = todos.map((val,index) => {
            if (index === id) {
              val.todo = "completed";
            }
            return val;

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