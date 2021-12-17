import { BsPlusCircle } from "react-icons/bs";
import './TodoInsert.scss';
import React, { useState, useCallback, useContext } from 'react';
import { TodoContext } from "../contexts/TodoProvider";

const TodoInsert = () => {
    const context = useContext(TodoContext);
    const [value, setValue] = useState('');

    const onChange = useCallback(e=> {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e)=> {
        e.preventDefault();
        context.actions.contextDispatch({type:'ON_INSERT', text: value})
        setValue('');
    }, [context.actions, value]);

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" onChange={onChange} value={value}></input>
            <button type="submit">
                <BsPlusCircle/>
            </button>
        </form>
    )
}

export default TodoInsert;