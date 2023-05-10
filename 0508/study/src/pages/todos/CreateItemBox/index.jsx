import * as S from './styled';
import Button from '../../../components/button'

function CreateItemBox({value, onChange, createTodo}) {
  const handleInputValue = e =>{
    onChange(e.target.value);
  };
  return (
    <S.InputBox>
      <div>
      <S.Input value={value} placeholder='To do를 입력해주세요.' 
      onChange={handleInputValue}/>
      <Button onClick={createTodo}>등록</Button>
      </div>
      <hr/>
    </S.InputBox>
  );
}

export default CreateItemBox;
