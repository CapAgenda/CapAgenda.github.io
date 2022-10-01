import styled from "styled-components";

export const HighlightsContainer = styled.div`
    min-height: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(6,6,6);
background: linear-gradient(180deg, rgba(8,8,8,1) 0%, rgba(16,16,16,1) 100%);
    padding-bottom: 24px;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
        height: 100%;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
        height: 100%;
    }
`

export const HighlightsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 48px;

    @media screen and (max-width: 1000px) {
        grid-template-columns:  1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 8px;
    }
`

export const HighlightsCard = styled.div`
    background: #313431;
    border: 1px solid #000;
    color: #f4eec1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
    height: 450px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        border: 1px solid #fbec10;
        box-shadow: 0 1px 3px rgba(0,0,0,0.5);
        transition: all 0.2s ease-in-out;
    }
`

export const HighlightsH1 = styled.h1`
    font-size: 2rem;
    color: #fbec10;
    margin-bottom: 24px;
    padding: 24px;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 16px;
    }
`

export const HighlightsH2 = styled.h2`
    color: #fbec10;
    font-size: 1rem;
    margin-bottom: 8px;
    text-align:  center;
`

export const HighlightsP = styled.p`
    font-size: 1rem;
    text-align: center;
    line-height: 32px;
`

export const Details = styled.p `
    color: #101010;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 32px;
    margin-bottom: 16px;
`

export const HighlightsIcon = styled.img`
    border-radius: 300%;
    border: 8px solid #101010;
    height: 200px;
    width: 200px;
    margin-bottom: 24px;
`