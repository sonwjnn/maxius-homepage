export interface NavLink {
  title: string;
  label?: string;
  href: string;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Prochure",
    href: "/prochure",
  },
  {
    title: "Proposal",
    href: "/proposal",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
