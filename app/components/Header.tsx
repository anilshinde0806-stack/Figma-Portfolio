import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-2">
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
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
               Download-CV
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
