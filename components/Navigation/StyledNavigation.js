import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.footer`
background-color: var(--background-tertiary);
padding: 0,8rem;
border: 5px solid var(--secondary);
border-radius: 25px;
list-style-type: none;
bottom:0;
position:fixed;
width: 100%;

align-items:center;
`;

export const NavigationList = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  margin: -2rem;
  padding: 2rem;
  list-style: none;
  gap:5px;
  align-items: space;
 
`;

export const NavigationListItem = styled.li`


background-color: var(--background-foreground);
  border-radius: 25px;
  width: 40%;
 &:hover {
    transform: translateY(-1px);
    filter: brightness(1.15);
    color: var(--accent);    
  }


`;

export const NavigationLink = styled(Link)`
display: flex;
  border-radius: 999px;
 
  justify-content: center;
  text-decoration: none;
  color: ${({ $highlighted }) =>
    $highlighted ? "var(--accent)" : "var(--background-secondary)"};
  background-color: ${({ $highlighted }) =>
    $highlighted ? "var(--background-secondary)" : "transparent"};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
  transition:
    transform 0.15s ease,
    filter 0.2s ease,
    color 0.2s ease,
    stroke 0.2s ease,
    fill 0.2s ease;

    svg {
    width: 32px;
    height: 32px;
    overflow: visible;
    display: block;
  }

  svg path, svg circle , svg line {
    stroke: ${({ $highlighted }) =>
      $highlighted ? "var(--accent)" : "currentColor"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
   
    fill: none;
    transition: stroke 0.2s ease, fill 0.2s ease;
  }

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.15);
    color: var(--accent);    
  }

    &:hover svg path {
    stroke: var(--accent);
    fill: none;
    }
`;