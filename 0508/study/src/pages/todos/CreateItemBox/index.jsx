import * as S from './styled';
import Button from '../../../components/button'

function CreateItemBox({onChange, createTodo}) {
  const handleInputValue = e =>{
    onChange(e.target.value);
  };
  return (
    <S.InputBox>
      <S.Input placeholder='To do를 입력해주세요.' onChange={handleInputValue}/>
      <Button onClick={createTodo}>등록</Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
