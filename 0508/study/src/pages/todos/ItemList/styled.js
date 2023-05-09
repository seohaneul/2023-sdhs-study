import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  >li{
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;
