import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import { createTodo, setTodos, deleteTodo, deleteSelectedTodos } from '../../reduce/todos';
import * as S from './styled';
import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import SearchInput from'../../components/SearchInput';
import Button from '../../components/Button';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const dispatch = useDispatch();

  const {todos} = useSelector((state) => state.todos);
  // SearchInput에서 변경된 input의 값을 여기서는 알 수 없다.
  // 그래서 SearchInput의 onChange를 통해 바뀐 값을 여기다가 저장한다.
  // 그래서 만들었다.
  // 5. searchValue가 (4)에서 바꿔주었기 떄문에 바뀐다.
  const [searchValue, setSearchValue] = useState('');

  // 선택한 todos의 id들을 저장하는 state
  const[selectedTodoIds, setSelectedTodos] = useState([]);


  const handlecreateTodo = () => {
    setTodoName('');
    dispatch(createTodo({id: uuidv4(), name: todoName}))
  }

  const handledeleteTodo = id => {
    dispatch(deleteTodo(id));
  }

  const handledeleteSelectedTodos = () => {
    dispatch(deleteSelectedTodos(selectedTodoIds))
  }

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(parseTodos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
    } catch (error) {
      console.log(error);

    }
  }, [todos]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <SearchInput
      // 3. SearchInput의 handleValue에서 실행시켜준 함수
        onChange={value => {
          // 4. SearchInput의 onChage를 넣어준 value
          setSearchValue(value);
        }} />
      <CreateItemBox value={todoName}
        onChange={setTodoName} createTodo={handlecreateTodo} />
        <Button onClick={handledeleteSelectedTodos}>선택된 To do 삭제</Button>
      <ItemList 
      todos={todos} 
      searchValue={searchValue} 
      deleteTodo={handledeleteTodo} 
      setSelectedTodos={setSelectedTodos}/>
    </S.Container>
  );
}


export default Todos;
