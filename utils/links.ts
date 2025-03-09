type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/favorites", label: "favorites" },
  { href: "/bookings", label: "bookings" },
  { href: "/reviews", label: "reviews" },
  { href: "/rentals", label: "create rental" },
  { href: "/profile", label: "profile" },
];
