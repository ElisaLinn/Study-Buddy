import styled from "styled-components";


export const ResetAllButtonWrapper = styled.section`
display: flex;
justify-content: center;
`;

export const AnimationWrapper = styled.section`
overflow: hidden;
`;

export const ResetAllButton = styled.button`
  background-color: var(--alert);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CardWrapper = styled.div`
  ${(props) =>
    props.isResetting &&
    `
    animation: fadeOutAndSlideRight 0.6s ease-out forwards;
  `}

  @keyframes fadeOutAndSlideRight {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(150%);
    }
  }
`;

