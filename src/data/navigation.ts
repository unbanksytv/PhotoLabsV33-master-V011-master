import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Collection page",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search page",
  },
  {
    id: ncNanoId(),
    href: "/page-author",
    name: "Author Profile",
  },
  {
    id: ncNanoId(),
    href: "/nft-detailt",
    name: "NFT detailt",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account settings",
  },
  {
    id: ncNanoId(),
    href: "/page-upload-item",
    name: "Upload Item",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "#",
    name: "Discover",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];
