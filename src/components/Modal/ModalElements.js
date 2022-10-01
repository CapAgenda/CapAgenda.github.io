import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const ModalOverlay = styled.aside`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.85);
    display:grid;
    place-items:center;
    transition: all 0.5s ease-in-out;
    z-index:100;

`

export const ModalContainer = styled.div`
    width:80vw;
    max-width:800px;
    height:80vh;
    overflow:auto;
    background: #101010;
    border-radius: 4px;
    z-index: 101;
    border: 1px solid #fbec10;

    /* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #101010;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fbec10;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export const ProjectImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-bottom: 1px solid #fbec10;

`

export const ModalContent = styled.div`
    margin-top: 24px;
    color: #fff;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

export const ProjectTitle = styled.h3`
    color: #fbec10;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
`

export const ProjectDescription = styled.p`
    padding: 8px;
    font-weight: lighter;
    margin-bottom: 24px;
    white-space: pre-line;
    line-height: 1.5;
`

export const Subhead = styled.h5`
    color: #fbec10;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
`

export const TechUsed = styled.p`
    padding: 8px;
    font-size: 16px;
    letter-spacing: 1.2px;
    font-weight: normal;
    margin-bottom: 24px;
    text-transform: uppercase;
`
export const BtnWrap = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ProjectButton = styled.a`
    background: #fbec10;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 32px;
    border-radius: 4px;
    margin: 16px 0;
    color: #101010;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        margin: 4px 0;
    }

    &:hover {
        background: #f4de66;
        transform: translateY(-2px);
        box-shadow: 0 1px 3px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 24%);
        transition: all 0.3s ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 
`

export const CloseButton = styled(FaTimes)`
    color: #fbec10;
`