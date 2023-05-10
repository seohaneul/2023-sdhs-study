import styled from 'styled-components';
import { Button } from '../../../components/button/styled';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  >div{
    display: flex;
    width: 100%;
  ${Button}{
    padding: 13px 25px;
    border: none;
    flex-grow: 1;
    flex-shrink: 0;
    border-radius: 0%;
    cursor: pointer;
    &:hover{
      background: #676767;
      color: #fff;
    }
  }
  >hr{
    border: 1px solid black;
  }
}
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border:0 solid black;
  font-size: 18px;
  &:focus{
    outline: none;
  }
`;


