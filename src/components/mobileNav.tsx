import { useState } from 'react';

import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';


const NavMobile: NextPage = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="site-nav w-full">
            <ul className="site-nav__list">
                <li className="site-nav__item relative">
                    <button onClick={toggleMenu} className="site-nav__link">VENTAS Y ARRIENDOS</button>
                    {showMenu && (
                        <div className="absolute z-10 mt-2 bg-gray-200 bg-opacity-50 border border-gray-300 rounded shadow-md">
                            <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-200 no-underline">
                                Venta
                            </Link>
                            <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-200 no-underline">
                                Arriendos
                            </Link>
                            <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-200 no-underline">
                                Estimaciones de valor
                            </Link>
                        </div>
                    )}
                </li>

            </ul>
        </nav>
    );
};

export default NavMobile;