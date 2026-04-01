import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="Footer" className="py-10  px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I&apos;m currently looking to join a cross-functional team that values 
            improving people&apos;s lives through accessible design, or have a project 
            in mind? Let&apos;s connect.
          </p>
          <a
            href="#"
            className="text-purple-400"
          >
            Mobile No-9274066210
          </a>
          <br></br>
          <a
            href="mailto:anilshinde0806@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
           Mail to- anilshinde0806@gmail.com
          </a>


        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <Link
            href="https://www.instagram.com/anilshinde0806/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Instagram"
          >
            <Image
              src="/assets/insta.webp"
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326
    24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1
    1.893-4.788 4.659-4.788 1.325 0 2.466.099
    2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796
    1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.405
    24 24 23.405 24 22.674V1.326C24 .595 23.405 0
    22.675 0z"/>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anil-shinde-28062a30/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
         <Link
            href="https://wa.me/919274066210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
  <svg
       viewBox="0 0 24 24"
       fill="#25D366" className="w-5 h-5 text-white">
    <path d="M20.52 3.48A11.8 11.8 0 0012.02 0C5.39 0 .02 5.37.02
    12c0 2.12.55 4.19 1.6 6.01L0 24l6.2-1.62A11.94 11.94 0
    0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.5-8.52zM12.02
    21.82c-1.8 0-3.55-.48-5.08-1.39l-.36-.21-3.68.96.98-3.59-.23-.37A9.77
    9.77 0 012.25 12c0-5.38 4.38-9.77 9.77-9.77 2.61 0 5.06 1.02
    6.91 2.86A9.72 9.72 0 0121.79 12c0 5.39-4.38 9.82-9.77
    9.82zm5.37-7.33c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94
    1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.48-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2
    0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22
    3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2
    1.87.12.57-.08 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.38-.07-.13-.27-.2-.56-.35z"/>
  </svg>
</Link>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Anil Shinde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

