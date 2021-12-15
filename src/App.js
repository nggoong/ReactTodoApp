import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import React, { useState, useCallback} from 'react';
import TodoProvider from './contexts/TodoProvider';

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
  
  const [todos, setTodos] = useState(createBulkTodos); // createBulkTodos()을 하면 리렌더링 될 때마다 함수가 실행되지만 함수 명을 넘겨주면 마운트 될 때 한 번만 실행된다.

  const onRemove = useCallback((id)=> {
    setTodos(todos => todos.filter(todo=>todo.id !== id));
  }, [])

  const onToggle = useCallback((id)=> {
    setTodos(todos => todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }, []);

  return (
    <TodoProvider>
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
    </TodoProvider>
  );
}

export default App;


