import styled from "styled-components";
import Link from "next/link";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: system-ui;
  justify-content: center;
  background: var(--background);
  padding-top: 80px;
  `;

  export const Title = styled.h1`
  background: var(--primary);
  font-size: 2.69;
  font-weight: 700;
  color: var(--primary);
  align-self: center;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: var(--secondary);
`;

export const Text = styled.p`
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
`;

export const BackLink =styled(Link)`
 background-color: var(--background-secondary);
  border: none;
  padding: 1rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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