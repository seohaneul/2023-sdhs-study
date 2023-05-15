import * as  S from './style';

function SearchInput({ onChange }){
    const handelValue = e => {
        // input에서 입력한 값
        console.log(e.target.value);
        // 2. onChang라는 함수에 input에서 입력한 값을 넘겨준다.
        onChange(e.target.value);
    }

    return(
        <S.SearchInputBox>
            <S.SearchInput placeholder='검색할 내용을 입력하세요.' onChange={handelValue} />
        </S.SearchInputBox>
    )
}

export default SearchInput;