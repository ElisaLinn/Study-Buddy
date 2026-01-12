import styled from "styled-components";

export const DeleteButtonStyled =styled.button`
 background-color: var(--background-secondary);
  border: none;
  padding: 1rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
color: var(--primary);
  
  cursor: pointer;
  width: 5rem;
  height: 56px;
  
  
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;

  svg {
    width: 32px;
    height: 32px;
  }

  svg path {
    stroke: var(--primary);
    
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
  `;
