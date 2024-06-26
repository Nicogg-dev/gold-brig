import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FiAlignJustify } from "react-icons/fi";


const NavMobile: NextPage = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const menuRef = useRef<HTMLDivElement | null>(null);

    const closeMenuIfClickedOutside = (event: { target: any; }) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
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
        <nav className="site-nav w-full h-20">
            <ul className="flex justify-between items-center">
                <li className="site-nav__item relative">
                    <button
                        onClick={toggleMenu}
                        className={`site-nav__link transition duration-300 flex gap-2 text-xl h-full`}
                    >
                        <FiAlignJustify className={`text-4xl transition duration-300 ${showMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showMenu && (
                        <div className="absolute z-10 mt-2 bg-blue-950 shadow-md transition duration-300">
                            <li className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                                <Link href={`/search?tipo=ventaap`} className="site-nav__link text-xl">Venta</Link>
                            </li>
                            <li className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                                <Link href={`/search?tipo=arriendoap`} className="site-nav__link text-xl">Arriendo</Link>
                            </li>
                            <li className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                                <Link href='/estimaciones' className="site-nav__link text-xl">Estimaciones de valor</Link>
                            </li>
                            <li className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                                <Link href={`/search?tipo=vacacionalesap`} className="site-nav__link text-xl">Vacacionales</Link>
                            </li>
                            <li className="block px-4 py-2 text-white hover:bg-blue-950 no-underline text-xl">
                                <Link href="/proyectos" className="site-nav__link text-xl">Proyectos</Link>
                            </li>
                        </div>
                    )}
                </li>
                <li>
                    <Link href="/">
                        <Image
                            src={currentPath == "/" ? "/images/icono.png" : "/images/icono-pagina-removebg-preview.png"}
                            alt="Banner"
                            width={70}
                            height={50}
                            className={currentPath == "/" ? " " : "mt-2"}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMobile;