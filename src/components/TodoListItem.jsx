import React, { useContext } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline  } from "react-icons/md";
import { TodoContext } from '../contexts/TodoProvider';
import './TodoListItem.scss';

import cn from 'classnames';

const TodoListItem = ({ todo }) => {
    const context = useContext(TodoContext);
    const {text, checked, id} = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>context.actions.onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>context.actions.onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);