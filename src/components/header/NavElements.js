import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30%;
    color: white;
    font-size: 3rem;
    font-weight: bold;
`;
export const Nav = styled.nav`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: cadetblue;
    padding: 0.2rem calc((100vw-1000px)/2);
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
`;

export const NavLink = styled(Link)`
    color: rgba(245, 245, 245, 0.619);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96%;
    width: 20%;
    cursor: pointer;
    &.active {
        border-bottom : 3px solid blue;
        color: white;
    }
    &:hover {
        background-color: cornflowerblue;
    }
`;