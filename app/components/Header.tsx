
"use client";
import Link from "next/link";
import Image from "next/image";

import {ReactNode, useState} from "react";


function Button(props: { size: string, onClick: () => void, children: ReactNode }) {
  return null;
}

export default function Header(): React.JSX.Element {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (

      <div className={dark ? "dark bg-black text-white" : "bg-purple-50 text-black"}>
      <nav className="flex justify-between p-4 shadow-md sticky top-0 bg-opacity-90 backdrop-blur">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
          <Image src="/logo/logo2.svg" alt="Logo" width={100} height={10}  />
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link 
                href="#home" 
                className="px-3 py-1 rounded-md text-white hover:bg-purple-500 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#about"
className="px-3 py-1 rounded-md text-white hover:bg-purple-500 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#Experience"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Work Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#lab" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Certification
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#Achievements"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Achievements
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#Footer"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Contact
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="https://drive.google.com/file/d/1NUpoxJaLXTxA9A5AC0J9-VTTtKA_0x-l/view"
                target="_blank"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Download-CV
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <Button size="sm" onClick={() => setDark(!dark)}>Toggle</Button>
        </div>
      </nav>
      </div>

  );
}
