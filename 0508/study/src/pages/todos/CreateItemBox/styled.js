import styled from 'styled-components';
import { Button } from '../../../components/button/styled';

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  >${Button}{
    padding: 13px 25px;
    border: 1px solid black;
    flex-grow: 1;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
`;


