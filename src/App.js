import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import React, { useState, useCallback, useRef } from 'react';

function App() {
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

  const nextId = useRef(5);

  const onInsert = useCallback((text) => {
    const todo = {
      id:nextId.current,
      text,
      checkd:false
    }
    setTodos(todos.concat(todo));
    nextId.current+=1;
  }, [todos])

  const onRemove = useCallback((id)=> {
    setTodos(todos.filter(todo=>todo.id !== id));
  }, [todos])

  const onToggle = useCallback((id)=> {
    setTodos(todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }, [todos]);
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;


