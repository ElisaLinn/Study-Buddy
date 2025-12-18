import { House } from "lucide-react";
import Link from "next/link";
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
                <NavigationLink href="/" className={router.pathname === "/" ? "highlighted" : ""}>
                    <House/>
                </NavigationLink>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
  );
}