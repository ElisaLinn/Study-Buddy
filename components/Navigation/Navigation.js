import { Archive, House, LibraryBig } from "lucide-react";
import { useRouter } from "next/router";
import { NavigationWrapper, NavigationList, NavigationListItem, NavigationLink } from "./StyledNavigation";

export default function Navigation() {
  const router = useRouter();
  
  return(
    <NavigationWrapper>
        <NavigationList>
            <NavigationListItem>
                <NavigationLink href="/" className={router.pathname === "/" ? "highlighted" : ""}>
                    <House/>
                </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
                <NavigationLink href="archive" className={router.pathname === "/" ? "highlighted" : ""}>
                    <Archive/>
                </NavigationLink>
            </NavigationListItem>
              <NavigationListItem>
                <NavigationLink href="flashcards" className={router.pathname === "/" ? "highlighted" : ""}>
                    <LibraryBig/>
                </NavigationLink>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
  );
}