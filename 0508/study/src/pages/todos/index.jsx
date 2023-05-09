import CreateItemBox from './CreateItemBox';
import * as S from './styled'

function Todos(){
    return(
        <S.Container>
            <S.Title>To Do list</S.Title>
            <CreateItemBox/>
        </S.Container>
    ) 
}

export default Todos;