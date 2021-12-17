import React, { createContext, useReducer } from 'react';


const ON_INSERT = 'ON_INSERT';
const ON_REMOVE = 'ON_REMOVE';
const ON_CHECKED = 'ON_CHECKED';

export const TodoContext = createContext();

const initData = 
[
  {
    id:1,
    text:'리액트의 기초 알아보기',
    checked:true
  },
  {
    id:2,
    text:'마트 장 보기',
    checked:false
  },
  {
    id:3,
    text:'애플 스토어 갔다오기',
    checked:true
  },
  {
    id:4,
    text:'병원 갔다오기',
    checked:false
  },
]

const reducer = (state, action) => {

  switch(action.type) {
    case ON_INSERT:
      const nextId = state.length + 1;
      const newData = {
        id:nextId,
        text: action.text,
        checked:false
      }

      return state.concat(newData);

    case ON_REMOVE:
      const newArr = state.filter(value=> value.id !== action.id);
      const resultArr = newArr.map(value=> value.id > action.id? {...value, id: value.id - 1} : value);
      return resultArr;

    case ON_CHECKED:
      return state.map(value=> value.id === action.id? {...value, checked:!value.checked}: value);
  }
}

const TodoProvider = ( {children} ) => {
    // const nextId = useRef(5);
    const [data, contextDispatch] = useReducer(reducer, initData);
    
    
    
        // const onInsert = (text) => {
        //     const todo = {
        //         id:nextId.current,
        //         text:text,
        //         checked:false
        //     }
        //     setTodos(todos => todos.concat(todo));
        //     nextId.current += 1;
        // }

        // const onRemove = (id) => {
        //     setTodos((todos)=> todos.filter(todo=>todo.id!=id));
        // }

        // const onToggle = (id) => {
        //   setTodos((todos)=>todos.map(todo=> todo.id===id? {...todo, checked:!todo.checked} : todo));
        // }
        

        const value = {
            state: {data},
            // actions: {setTodos, onInsert, onRemove, onToggle}
            actions: {contextDispatch}
        }

    return(
        <TodoContext.Provider value = {value}>{children}</TodoContext.Provider>
    )
}

export default TodoProvider;