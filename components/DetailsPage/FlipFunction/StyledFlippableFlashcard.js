import styled from "styled-components";

export const FlashcardWrapper = styled.div`
  padding: 1rem;
  background-color: ${(props) =>
    props.isCorrect ? "#f8fff9" : "var(--card-foreground)"};
  border: ${(props) =>
    props.isCorrect ? "3px solid #28a745" : "1px solid #ccc"};
  border-radius: 25px;
  margin-bottom: 2rem;
  position: relative;
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
  border-radius: 4px;
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
  border-radius: 4px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const CorrectBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #28a745;
  font-size: 20px;
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;
