import styled from 'styled-components';
import {Link as LinkRo} from 'react-router-dom';
import {Link as LinkSc} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;       
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;    
`;

export const NavLogo = styled(LinkRo)`
    color: #fbec10;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.5s all ease-in-out;

    &:hover {
        color: #f4eec1;
        transition: 0.5s all ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        color: #fbec10;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px; // Remove if not needed

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkSc)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
        color: #fbec10;
        transition: 0.5s all ease-in-out;
    }

    &.active {
        border-bottom: 3px solid #fbec10;
    }
`;