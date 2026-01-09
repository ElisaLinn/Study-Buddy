import styled from "styled-components";

export const FlashcardWrapper = styled.div`
  position:relative;
  margin: 2rem auto;
 
  perspective: 1000px;
  min-height: 250px;
  width: 700px;
  height: 300px;
`;

export const FlipContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props) =>
    props.isCorrect ? "var(--card-foreground-correct)" : "var(--card-foreground)"};
  border: ${(props) =>
    props.isCorrect ? "5px solid #28a745" : "5px solid var(--accent)"};
  border-radius: 25px;
  
  margin: 2rem auto;
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
  letter-spacing: 0.5px;
  border: 2px solid var(--secondary);
  z-index: 1;
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

export const QuestionText = styled.p`
  font-size: 18px;
  margin: 15px 0;
`;

export const ButtonContainer = styled.div`
  margin: 15px 0;
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
  color: var(--accent);
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: -10px;
  right:10px;

  &:hover {
    color: #0056b3;
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
