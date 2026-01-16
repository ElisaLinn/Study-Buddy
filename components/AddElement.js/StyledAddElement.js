import styled from "styled-components";

export const AddButton = styled.button`
position: fixed;
right: 5px;
bottom: 70px;
padding: 0.5rem;
border-radius: 50px;
background-color: var(--primary);
border: 3px solid var(--secondary);
color: white;
opacity: 1 !important;
z-index: 1000;
cursor: pointer;


&:hover{
    color: var(--accent-foreground);
    background-color: var(--accent);
    border-color: var(--primary);
    transform: scale(1.1);
} 
`;
