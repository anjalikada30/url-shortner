import styled from "styled-components";

export const UrlContainer = styled.div`
    width: 98%;
    background-color: white;
    height: 6vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 5px;
`;

export const ActualUrl = styled.div`
    flex-grow: 1;
`;

export const ShortUrl = styled.div`
    color: cadetblue;
`;

export const CopyButton = styled.button`
    width: 4vw;
    margin-left: 5px;
    height: 5vh;
    border-radius: 10px;
    padding: 7px;
    background-color: aqua;
    cursor: pointer;
    border: none;
`;