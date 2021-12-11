import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import React, { useState, useCallback, useRef } from 'react';

function createBulkTodos() {
  const array = [];
  for(let i=0; i<2500; i++) {
    array.push({
      id:i,
      text : `할 일${i}`,
      checked:false
    })
  }
  return array;
}

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //     text:'리액트의 기초 알아보기',
  //     checked:true
  //   },
  //   {
  //     id:2,
  //     text:'마트 장 보기',
  //     checked:false
  //   },
  //   {
  //     id:3,
  //     text:'애플 스토어 갔다오기',
  //     checked:true
  //   },
  //   {
  //     id:4,
  //     text:'병원 갔다오기',
  //     checked:false
  //   },
  // ])
  const [todos, setTodos] = useState(createBulkTodos); // createBulkTodos()을 하면 리렌더링 될 때마다 함수가 실행되지만 함수 명을 넘겨주면 마운트 될 때 한 번만 실행된다.

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id:nextId.current,
      text,
      checked:false
    }
    setTodos(todos => todos.concat(todo));
    nextId.current+=1;
  }, [])

  const onRemove = useCallback((id)=> {
    setTodos(todos => todos.filter(todo=>todo.id !== id));
  }, [])

  const onToggle = useCallback((id)=> {
    setTodos(todos => todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;


