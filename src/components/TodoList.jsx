import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import React, { useContext } from 'react';
import { TodoContext } from "../contexts/TodoProvider";


const TodoList = () => {
    const context = useContext(TodoContext);
    let todos = context.state.data;
    return(
        <div className="TodoList">
            {todos.map(todo=> {return(<TodoListItem todo={todo} key={todo.id}/>)})}
        </div>
    )
}


export default TodoList;