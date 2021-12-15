import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import React, { useContext } from 'react';
import { TodoContext } from "../contexts/TodoProvider";


const TodoList = ({ onRemove, onToggle }) => {
    const context = useContext(TodoContext);
    
    let todos = context.state.todos;
    return(
        <div className="TodoList">
            {todos.map(todo=> {return(<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>)})}
        </div>
    )
}


export default TodoList;