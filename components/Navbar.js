import Link from "next/Link";
import Image from "next/image";
import logo from "../public/SElogo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white h-28 w-full px-10 flex flex-col justify-center z-auto">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="SeLogo" />
          </Link>
        </div>
        <ul className="grid grid-cols-5 gap-x-8 justify-end items-center text-center text-black font-bold">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/program">Program</Link>
          </li>
          <li>
            <Link href="/admission">Admission</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
