import Button from '../Button';
import Checkbox from '../Checkbox';
import * as S from './styled';

function Todo(props) {
  const {deleteTodo, handleSelected} = props;

  return (
    <>
    <S.Container>
      <Checkbox onChange={handleSelected}/>
      <S.Title>{props.children}</S.Title>
      <div>
        <Button className='imfortant'>중요</Button>
        <Button className='delete' 
        onClick={deleteTodo}>삭제</Button>
      </div>
    </S.Container>
    </>
  );
}

export default Todo;
