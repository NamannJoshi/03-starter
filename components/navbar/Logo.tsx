import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Link href="/">
      <LuTent className="w-10 h-10 p-2 bg-primary rounded" />
    </Link>
    // <Button size="icon" asChild>
    // </Button>
  );
}
export default Logo;
