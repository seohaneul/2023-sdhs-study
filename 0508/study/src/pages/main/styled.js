import styled from "styled-components";
import { Button } from "../../components/Button/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const MainWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 200px;
    height: 200px;

    >div{
        font-size: 20px;
        font-weight: 600;
        
    }
    >${Button}{
        padding: 8px 10px;
        border: none;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            background-color: #ccc;
        }
    >a{
        color: #000;
        text-decoration: none;
    }
    }
    
`