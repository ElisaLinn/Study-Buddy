import Link from "next/link"

const { default: styled } = require("styled-components")

export const StyledBackButton = styled(Link)`
border: 2px solid var(--primary);
border-radius:25px;
padding: 0.5rem
`;