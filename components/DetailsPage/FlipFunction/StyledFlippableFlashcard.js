import styled from "styled-components";

export const FlashcardWrapper = styled.div`
  position: relative;
  margin: 2rem auto;
  perspective: 1000px;
  min-height: 15rem;
  width: 95%;
  max-width: 45rem;
  height: 20rem;
  
  ${(props) => props.isAnimating && `
    animation: flashGreenAndSlide 0.6s ease-out ;
  `}
  
  @keyframes flashGreenAndSlide {
    0% {
      filter: brightness(1);
      transform: translateX(0);
      opacity: 1;
    }
    20% {
      filter: brightness(1.5) hue-rotate(90deg);
    }
    40% {
      filter: brightness(1);
    }
    100% {
      transform: translateX(-150%);
      opacity: 0;
    }
  }
`;



export const FlipContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isCorrect ? "var(--card-foreground-correct)" : "var(--card-foreground)"};
  border: ${(props) =>
    props.isCorrect ? "5px solid #28a745" : "5px solid var(--accent)"};
  border-radius: 25px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;


export const FlashcardSide = styled.div`
  position: absolute;
  justify-items:center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 25px;
  padding: 1rem;
  padding-top: 5.5rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
  
  &.front {
    
  }
  
  &.back {
    transform: rotateY(180deg);
  }
`;

export const CollectionTag = styled.span`
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.7px;
  border: 2px solid var(--secondary);
  z-index: 1;
`;

export const AnswerButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary);
  border-radius: 25px;
  border: 5px solid var(--primary-foreground);
  margin-top:15px;

`;

export const HideAnswerButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--secondary);
  border-radius: 25px;
  border: 5px solid var(--terciary);
  color: white;
  margin-bottom: 10px;
`;

export const QuestionText = styled.p`
 color: var(--secondary);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
`;

export const AnswerText = styled.p`
 color: var(--secondary);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CorrectButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 25px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const IncorrectButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 25px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const CorrectBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #28a745;
  font-size: 20px;
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: var(--card);
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: 15px;
  right:15px;

  &:hover {
      color: var(--accent-foreground);;
  }
`;

export const TagWrapper = styled.section`
  background-color: var(--background-tertiary);
  border-radius: 0 0 20px 20px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const CollectionTagStyled = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: inline-block;
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 2px solid var(--secondary);
  z-index: 10;
`;

export const SubtitleWrapper = styled.section`
  background-color: var(--background-tertiary);
  border-radius: 20px 20px 0px 0px;
  
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom:2 rem;
`;


export const SubtitleCard = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: var(--background);
`;

export const RemoveCardButton = styled.button`
position:absolute;
top: 15px;
left:15px;
background-color: transparent;
border: none;
 svg {
    width: 32px;
    height: 32px;
  }

  svg path {
    stroke: var(--accent-foreground);
   background-color: transparent;
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

 

  &:hover svg path {
    stroke: var(--alert);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`