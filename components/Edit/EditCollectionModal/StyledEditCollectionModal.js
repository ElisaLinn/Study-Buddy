import styled from "styled-components";

export const ModalWrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  &:hover {
    color:var(--alert)
  }
`;

export const ModalContent = styled.section`
  background: var(--card);
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid var(--background-secondary);

  h2 {
    margin: 0;
    color: var(--card-foreground);
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--card-foreground);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--background-secondary);
    color: var(--alert);
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const Form = styled.form`
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--card-foreground);
    font-weight: 500;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--background-secondary);
  border-radius: 8px;
  background-color: var(--background-foreground);
  color: var(--card-foreground);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(124, 110, 230, 0.1);
  }

  &::placeholder {
    color: var(--terciary);
  }
`;

export const DeleteSection = styled.div`
  border: 2px solid var(--alert);
  border-radius: 8px;
  padding: 1rem;
  background-color: rgba(227, 93, 106, 0.05);

  h3 {
    margin: 0 0 0.5rem 0;
    color: var(--alert);
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0 0 1rem 0;
    color: var(--card-foreground);
    font-size: 0.875rem;
  }
`;

export const ModalFooter = styled.footer`
  padding: 1.5rem;
  border-top: 1px solid var(--background-secondary);
`;

export const ButtonGroup = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  padding: 12px 24px;
  background-color: var(--terciary);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bookmark);
    
  }
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #545b62;
  }
`;


export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;