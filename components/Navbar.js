import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="" width={100} height={36} />
        </div>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a> About</a>
        </Link>
        <Link href="/list">
          <a> Listify Lists</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
