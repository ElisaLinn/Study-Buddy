import styled from "styled-components";

export const FlashcardWrapper = styled.div`
padding: 1rem;
background-color: var(--card-foreground);
border-radius: 25px;
margin-bottom: 2rem;
`;

export const AnswerButton = styled.button`
padding: 1rem 2rem;
background-color: var(--primary);
border-radius: 25px;
border: 5px solid var(--primary-foreground);

`;

export const HideAnswerButton = styled.button`
padding: 1rem 2rem;
background-color: var(--secondary);
border-radius: 25px;
border: 5px solid var(--terciary);
color: white;
`;