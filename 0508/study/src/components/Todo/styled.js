import styled from 'styled-components';

export const Container = styled.li`
  border-bottom: 2px solid #eeeeee;
  padding: 10px 10px 20px;

  >div{
  display: flex;
  gap: 10px;
  >button{
    border: 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #eee;
    color: #000;
    cursor: pointer;
    &:hover{
      background: #676767;
      color: #fff;
    }
  }
}
`;

export const Title = styled.p`
  font-size: 20px;
`;
