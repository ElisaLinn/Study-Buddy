import styled from "styled-components";

export const AddButton = styled.button`
position: fixed;
right:5px;
bottom:170px;
padding: 1rem;
border-radius:50px;
background-color:var(--primary);
border: 5px solid var(--primary-foreground);
color:var(--secondary);

&:hover{
    color: var(--accent-foreground);
    background-color: var(--accent);
} 
`;
