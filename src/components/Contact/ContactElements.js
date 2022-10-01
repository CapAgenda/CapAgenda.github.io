import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #fbec10;
    color: #101010;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const ContactWrap = styled.div`
    display: grid;
    z-index: 1;
    min-height: 550px; 
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-content: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const ColumnL = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1; 
       
`

export const ColumnR = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div `
    max-width: 540px;
    justify-items: center;
    margin-top: 24px;
    
`

export const ContactP = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 1.4px;
    
`

export const ContactTopLine = styled.h2`
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const ContactForm = styled.form`
   
`



export const ContactInput = styled.input`
    background: #fbec10;
    color: #101010;
    font-size: 16px;
    padding: 8px 8px 8px 4px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #101010;

    &:focus {
    border-bottom: 3px solid #101010;
    outline: none;
    }
`

export const NameInput = styled.input`
    background: #fbec10;
    color: #101010;
    font-size: 16px;
    padding: 8px 8px 8px 4px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #101010;

    &:focus {
    border-bottom: 3px solid #101010;
    outline: none;
    }


  `

export const ContactTextarea = styled.textarea`
    background: #fbec10;
    color: #101010;
    font-size: 16px;
    padding: 8px 8px 8px 4px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #101010;

    &:focus {
    border-bottom: 3px solid #101010;
    outline: none;
    }
` 

export const ContactBtn = styled.input`
    background: #fff;
    color: #101010;
    border: none;
    padding: 8px 24px;
    border-radius: 4px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none;
    outline: none;
    margin-top: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    cursor: pointer;
    
    &:hover {
        color: #101010;
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);
    }
        `


