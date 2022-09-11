import styled from "styled-components";

export const HighlightsContainer = styled.div`
    min-height: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00072d;
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
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns:  1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const HighlightsCard = styled.div`
    background: #E3F2FD;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const HighlightsH1 = styled.h1`
    font-size: 2.5rem;
    color: #E3F2FD;
    margin-bottom: 64px;
    padding: 39px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 34px;
    }
`

export const HighlightsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const HighlightsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const HighlightsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`