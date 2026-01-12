import { Archive, House, LibraryBig } from "lucide-react";
import { useRouter } from "next/router";
import { NavigationWrapper, NavigationList, NavigationListItem, NavigationLink } from "./StyledNavigation";

export default function Navigation() {
  const router = useRouter();
  
  return(
    <NavigationWrapper>
        <NavigationList>
            <NavigationListItem>
                <NavigationLink href="/" $highlighted={router.pathname === "/"}>
                    <House/>
                </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
                <NavigationLink href="/archive" $highlighted={router.pathname === "/archive"}>
                    <Archive/>
                </NavigationLink>
            </NavigationListItem>
              <NavigationListItem>
                <NavigationLink href="/flashcards" $highlighted={router.pathname === "/flashcards"}>
                    <LibraryBig/>
                </NavigationLink>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
  );
}