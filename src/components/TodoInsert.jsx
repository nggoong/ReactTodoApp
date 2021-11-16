import { BsPlusCircle } from "react-icons/bs";
import './TodoInsert.scss';
import React, { useState, useCallback, useEffect } from 'react';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=> {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e)=> {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }, [onInsert, value]);

    useEffect(()=> {
        console.log(value);
    }, [value]);

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