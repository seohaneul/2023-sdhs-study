import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import { useState } from 'react';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, settodos] = useState([]);

  const createTodo = () =>{
    settodos(prevState => [...prevState, {id: prevState.length, name: todoName}]);
    
  }
  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      {todoName}
      <CreateItemBox onChange = {setTodoName} createTodo={createTodo}/>
      <ItemList todos={todos}/>
    </S.Container>
  );
}

export default Todos;
