import Button from "../../components/Button";
import * as S from './styled';
import { Link } from "react-router-dom";

function Main() {
  return (
    <S.Container>
      <S.MainWapper>
        <div>Todos</div>
        <Button>
          <Link to = '/todos'>만들기</Link>
        </Button>
      </S.MainWapper>
    </S.Container>
  )
}
export default Main;