import * as S from './styled';
import Button from '../../../components/button'

function CreateItemBox({value, onChange, createTodo}) {
  const handleInputValue = e =>{
    onChange(e.target.value);
  };
  const handleKeyPress = e => {
    if(value === ""){
      return;
    }
    if (e.code === 'Enter'){
      createTodo();
    }
  }
  
  return (
    <S.InputBox>
      <div>
      <S.Input value={value} onKeyUp={handleKeyPress} placeholder='To do를 입력해주세요.' 
      onChange={handleInputValue}/>
      <Button onClick={createTodo} disabled={!value.trim()}>등록</Button>
      </div>
      <hr/>
    </S.InputBox>
  );
}

export default CreateItemBox;
