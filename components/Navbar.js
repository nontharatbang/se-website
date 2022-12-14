import Link from "next/Link";
import Image from "next/image";
import logo from "../public/SElogo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white h-28 w-full px-10 flex flex-col justify-center z-auto fixed z-20 top-0 left-0 border-b border-gray-200 ">
      <div className="flex justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="SeLogo" />
          </Link>
        </div>
        <ul className="grid grid-cols-4 gap-x-8 justify-end items-center text-center text-black font-bold">
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/program">Program</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/admission">Admission</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
