import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-8 flex flex-col sm:flex-row sm:justify-between sm:items:center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
