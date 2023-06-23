import Link from "next/link";
import ConnectAvatar from "./ConnectAvatar";

export default function Header() {
  return (
    <header className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          <span className="hidden md:block">Apocalypse Dudes</span>
          <span className="md:hidden">APD</span>
        </Link>
      </div>
      <div className="flex-none">
        <ConnectAvatar />
      </div>
    </header>
  );
}
