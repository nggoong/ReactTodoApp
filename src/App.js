import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import React, { useState } from 'react';

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

  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;


