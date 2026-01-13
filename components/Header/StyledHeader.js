import styled from "styled-components";


export const HeaderTitle = styled.h1`
  font-size: 2.69;
  font-weight: 700;
  margin: 0;
  color: var(--primary);
  text-align: center;
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  background: var(--background-secondary);
  color: var(--primary);
  border-bottom: 1px solid var(--primary-foreground);
  z-index: 2000;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;