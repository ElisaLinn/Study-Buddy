import { useRouter } from "next/router";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderContent,
  HeaderLogo,
} from "./StyledHeader";


export default function Header() {
  const router = useRouter();

  const titles = {
    "/": "Study Buddy",
    "/archive": "Archive",
    "/flashcards": "All Flashcards",
  };

  const title = titles[router.pathname] || "Study Buddy";

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </HeaderWrapper>
  );
}
