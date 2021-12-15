import React, { useState, createContext} from 'react';


export const TodoContext = createContext();

const TodoProvider = ( {children} ) => {
    const [todos, setTodos] = useState([
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
        ])
        

        const value = {
            state: {todos},
            actions: {setTodos}
        }

    return(
        <TodoContext.Provider value = {value}>{children}</TodoContext.Provider>
    )
}

export default TodoProvider;