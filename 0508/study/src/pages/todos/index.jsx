import * as S from './styled';
import { v4 as uuidv4 } from 'uuid';
import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import { useState } from 'react';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () =>{
    if(todoName === ""){
      alert("To do를 입력해주세요.")
      return;
    }
    setTodoName('');
    setTodos(prevState => [...prevState, 
      {id: prevState.length, name: todoName}]);
  }

    
   
      const deleteTodo = id =>{
        const findIndex = todos.findIndex(v => v.id === id);
        setTodos(prevState => {
          const tempArr = [...prevState]
          tempArr.splice(findIndex, 1);
          return tempArr
        })
      }
  
  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} 
      onChange = {setTodoName} createTodo={createTodo}/>
      <ItemList todos={todos} deleteTodo={deleteTodo}/>
    </S.Container>
  );
}


export default Todos;
