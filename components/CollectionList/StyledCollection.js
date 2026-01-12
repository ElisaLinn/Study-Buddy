import styled from "styled-components";
import Link from "next/link";

export const CollectionPageWrapper = styled.main`
  display: grid;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const CollectionsList = styled.ul`
  display: grid;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-column: 1 / -1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const CollectionWrapper = styled.section`
  border: 2px solid var(--secondary);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 0;
  background: linear-gradient(135deg, var(--background-foreground) 0%, rgba(255, 255, 255, 0.05) 100%);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;


  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--accent);

  }
`;

export const CollectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  line-height: 1.3;
`;

export const CollectionStats = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

export const StatIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-top: 1rem;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${props => props.$percentage || 0}%;
`;

export const HeaderSection = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: 1rem;
`;

export const AddElementWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const LinkStyled = styled(Link)`
color: var(--input);
text-decoration: none;
`;