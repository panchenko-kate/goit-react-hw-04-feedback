import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
`;

export const Btn = styled.button`
    padding: 5px;
    /* text-transform: capitalize; */
    :hover {
        background-color: #3719c9;
        opacity: 0.5;
        border-radius: 4px;
        color: #e3e3e3;
    }
`;