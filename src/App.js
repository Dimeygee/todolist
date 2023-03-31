import './App.css';
import { TextInput } from './components/input';
import { Todo } from './components/todo';
import { CheckedDeleteButton } from './components/button';
import { Status } from './components/status';
import { useSelector } from 'react-redux';
import React from 'react';


function App() {

  const todos = useSelector(state => state.todos.todos)
  const completedTasks = useSelector(state => state.todos.completed)


  return (
    <div className="App">
      <div className='container'>
        <h1>TodoList</h1>
        <TextInput />
        { todos.map(todo => {
          return (
            <React.Fragment key={todo.id}>
              <Todo  todo={todo} />
            </React.Fragment>
          )
        }) }
        <div className='tasks__checked_container'>
          <Status />
          { completedTasks.length && <CheckedDeleteButton />  }
        </div>
      </div>
    </div>
  );
}

export default App;
