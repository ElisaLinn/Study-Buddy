import { House } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationWrapper, NavigationList, NavigationListItem } from "./StyledNavigation";

export default function Navigation() {
  const router = useRouter();
  
  return(
    <NavigationWrapper>
        <NavigationList>
            <NavigationListItem>
                <Link href="/" className={router.pathname === "/" ? "highlighted" : ""}>
                    <House/>
                </Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link href="/" className={router.pathname === "/" ? "highlighted" : ""}>
                    <House/>
                </Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
  );
}