import styled from "styled-components";

export const InputField = styled.textarea`
  border: none;
  padding: 1rem;
  color: var(--input);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  min-height: 100px;
  font-family: inherit;
  outline: none;
`;

export const SubmitButtonStyled = styled.button`
  padding: 1rem 2.5rem;
  background-color: var(--accent);
  color: var(--primary-foreground);
  border-radius: 25px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  margin: 1rem auto;
  box-shadow: var(--box-shadow-button);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CancelButtonStyled = styled.button`
 background-color: var(--background-secondary);
  border: none;
  padding: 1rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left:10px;
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

  &:hover svg path {
    stroke: var(--background);
    fill: var(--background);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const SelectCategory = styled.select`
  background-color: transparent; 
  border: none;
  background-color: var(--primary);
  color: var(--card-foreground-correct);
  padding: 0.4rem 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  z-index: 10;
  cursor: pointer;
  
  option {
    font-size: 16px;
    background-color: var(--card);
    color: var(--card-foreground);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.5rem 12px;
  }
`;