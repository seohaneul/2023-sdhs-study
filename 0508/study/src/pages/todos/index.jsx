import * as S from './styled';
import { v4 as uuidv4 } from 'uuid';
import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

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

      useEffect(() => {
        try{
          const parseTodos = JSON.parse(localStorage.getItem('todos'));
          setTodos(parseTodos);
        }catch(error){
          console.log(error);
        }
      }, []);

      useEffect(() => {
        console.log('todos 저장');
        try {
          const stringifyTodos = JSON.stringify(todos);
          localStorage.setItem('todos', stringifyTodos);
        } catch (error) {
          console.log(error);
          
        }
      }, [todos]);
  
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
