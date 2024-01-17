import ProductCard from "@/src/components/productCard";
import LayoutHomePage from "@/src/layouts/home";
import { client } from "@/utils/sanityClient";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

interface Proyecto {
    ubicacion: string;
    // Otras propiedades si las tienes...
}

const tipo: string = 'proyectos';

interface Apartment {
    _id: string;
    // Otras propiedades si las tienes...
}

export default function Proyectos() {
    const [apartaments, setApartaments] = useState<Apartment[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [range, setRange] = useState<number>(3000);
    const [area, setArea] = useState<number>(3000);
    const [ubicacion, setUbicacion] = useState<string[]>([]);

    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setSelectedCity(event.target.value);
    };

    useEffect(() => {
        const getUbicacion = async () => {
            try {
                const res: Proyecto[] = await client.fetch(`*[_type == "proyectos"]{ubicacion}`);

                const ubicacionSet = new Set<string>();
                res.forEach((item) => {
                    ubicacionSet.add(item.ubicacion);
                });

                const departamentos = Array.from(ubicacionSet);
                setUbicacion(departamentos);
            } catch (error) {
                console.error('Error al obtener ubicaciones:', error);
            }
        };

        getUbicacion();
    }, []);

    useEffect(() => {
        const getApartaments = async () => {
            let query = `*[_type == "${tipo}" && precio < ${range * 1000000} && area < ${area}`;
            if (selectedCity !== '') {
                query += ` && ubicacion == "${selectedCity}"`;
            }
            query += ']';

            const res: Apartment[] = await client.fetch(query);
            setApartaments(res);
        }
        getApartaments();
    }, [range, area, selectedCity]);

    return (
        <LayoutHomePage title='Gold Brick'>
            <div className="grid grid-cols-2">
                <header className="grid grid-cols-12 col-span-2 justify-center mt-2">
                    {/* ... */}
                </header>
                <main className="grid grid-cols-12 col-span-2 m-5">
                    <section className="col-span-12 lg:col-span-4 pt-4 text-center px-4">
                        {/* ... */}
                    </section>
                    <section className="grid sm:grid-cols-6 md:grid-cols-12 col-span-12 lg:col-span-8">
                        {apartaments.map((apartment) => (
                            <ProductCard tipo={tipo} apartment={apartment} key={apartment._id} />
                        ))}
                    </section>
                </main>
            </div>
        </LayoutHomePage>
    )
}
