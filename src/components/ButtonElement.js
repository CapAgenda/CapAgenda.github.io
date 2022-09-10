import styled from "styled-components";
import {Link as LinkSc} from 'react-scroll';

export const Button = styled(LinkSc)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#2196F3' : '#0D47A1')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#0D47A1' : '#E3F2FD')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-weight: bold;
    text-transform:uppercase;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#BBDEFB' : '#1565C0')};
    }
`
