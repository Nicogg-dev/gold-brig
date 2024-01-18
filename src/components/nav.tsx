import { useState, useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Nav: NextPage = () => {
  const venta = 'ventaap';
  const arriendo = 'arriendoap';
  const vacacional = 'vacacionalesap';

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuRef = useRef(null);

  const closeMenuIfClickedOutside = (event: { target: any; }) => {
    if (menuRef.current && (menuRef.current as HTMLElement).contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenuIfClickedOutside);

    return () => {
      document.removeEventListener('click', closeMenuIfClickedOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-blue-950 h-28">
      <ul className="site-nav__list">
        <li className='flex pb-3 items-center justify-center text-center'>
          <Image
            src="/images/Maskgroup.png"
            alt="Banner"
            width={120}
            height={100}
            className='margin-auto'
          />
        </li>

        <li className="site-nav__item">
          <Link href="/" className="site-nav__link text-xl">HOME</Link>
        </li>

        <li className="site-nav__item relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className={`site-nav__link transition duration-300 flex gap-2 items-center text-xl h-full ${showMenu ? 'border-b-2' : 'border-b-0'}`}
          >
            VENTAS Y ARRIENDOS
            <FaArrowUp className={`text-sm transition duration-300 ${showMenu ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 max-h-0 ${showMenu ? 'max-h-screen' : ''}`}
          >
            {showMenu && (
              <div className="absolute z-10 mt-2 bg-blue-950 bg-opacity-80 shadow-md transition duration-300">
                <Link href={`/search?tipo=${venta}`} className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                  Venta
                </Link>
                <Link href={`/search?tipo=${arriendo}`} className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                  Arriendo
                </Link>
                <Link href='/estimaciones' className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                  Estimacion de valor
                </Link>
              </div>
            )}
          </div>
        </li>

        <li className="site-nav__item">
          <Link href={`/search?tipo=${vacacional}`} className="site-nav__link text-xl">VACACIONALES</Link>
        </li>

        <li className="site-nav__item">
          <Link href="/proyectos" className="site-nav__link text-xl">PROYECTOS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
