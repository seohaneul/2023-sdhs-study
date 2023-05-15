import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  >li{
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;
