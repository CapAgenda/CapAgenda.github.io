import styled from "styled-components";

export const SiteContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#313431' : '#00072d')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`
export const SiteWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 860px; 
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const SiteRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p `
    color: #fbec10;
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#E3F2FD' : '#f4de66')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 1.4px;
    color: ${({darkText}) => (darkText ? '#fff' : '#E3F2FD')};

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const LinkButton = styled.a`
    background: #fbec10;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 32px;
    border-radius: 50px;
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