import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
`;

export const Item = styled.li`
        :first-letter {
        text-transform: uppercase;
    }
`