import styled from "styled-components";
import Link from "next/link";

export const ResetAllButton = styled.button`
  background-color: var(--alert);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.2s ease;

  &:hover {
    background-color: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

