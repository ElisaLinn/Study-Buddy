import styled from "styled-components";

export const SuccessMessageWrapper = styled.section`
  background-color: var(--accent);
  color: var(--accent-foreground);
  border: 2px solid var(--accent-foreground);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  max-width: 600px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease-out;

  span {
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
