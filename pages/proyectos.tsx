import ProductCard from "@/src/components/productCard";
import LayoutHomePage from "@/src/layouts/home";
import { client } from "@/utils/sanityClient";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Proyectos() {

    const tipo = 'proyectos';

    const [apartaments, setApartaments] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [range, setRange] = useState(3000);
    const [area, setArea] = useState(3000);
    const [ubicacion, setUbicacion] = useState([]);

    const handleCityChange = (event: React.ChangeEvent<any>) => {
        setSelectedCity(event.target.value);
    };

    useEffect(() => {
        const getUbicacion = async () => {
            const res = await client.fetch(`*[_type == "proyectos"]{ubicacion}`);
            const ubicacionSet = new Set();
            res.forEach((item: any) => {
                ubicacionSet.add(item.ubicacion);
            });
            const departamentos = Array.from(ubicacionSet);
            setUbicacion(departamentos);
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

            const res = await client.fetch(query);
            setApartaments(res);
        }
        getApartaments();

    }, [range, area, selectedCity]);

    return (
        <LayoutHomePage title='Gold Brick'>

            <div className="grid grid-cols-2">
                <header className="grid grid-cols-12 col-span-2 justify-center mt-2">
                    <div className="col-span-12 md:col-span-4 pt-3 px-16">
                        <InputLabel id="ubicacion" className='font-light text-black mb-2 text-lg'>Ordenar por ciudades</InputLabel>
                        <Select
                            className="h-8"
                            labelId="demo-simple-select-autowidth-label"
                            id="ubicacion"
                            fullWidth
                            label="ciudad"
                            value={selectedCity}
                            onChange={handleCityChange}
                        >
                            <MenuItem value="" disabled>
                                Ordenar por ciudades
                            </MenuItem>
                            <MenuItem value=''>Todas las ciudades</MenuItem>
                            {
                                ubicacion.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="flex flex-col col-span-12 md:col-span-4 pt-3 px-16">
                        <h4 className="text-lg">Precio $43 - ${range} millones o mas</h4>
                        <input
                            type="range"
                            min="43"
                            max="3000"
                            value={range}
                            onChange={(e) => setRange(Number(e.target.value))}
                            className="appearance-none w-full h-0.5 bg-blue-950 rounded-md outline-none transition duration-300 ease-in-out hover:bg-gray-900 hover:shadow-md active:bg-black"
                        />
                    </div>
                    <div className="flex flex-col col-span-4 pt-3 px-16">
                        <h4 className="text-lg">Area 9m2 - {area}m2 o mas</h4>
                        <input
                            type="range"
                            min="9"
                            max="300"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="appearance-none w-full h-0.5 bg-blue-950 rounded-md outline-none transition duration-300 ease-in-out hover:bg-gray-900 hover:shadow-md active:bg-black"
                        />
                    </div>
                </header>
                <main className="grid grid-cols-12 col-span-2 m-5">
                    <section className="col-span-12 lg:col-span-4 pt-4 text-center px-4">
                        <h4>PROYECTOS</h4>
                        <p>
                            Impulsamos proyectos de construccion
                            para que nuestros clientes y proveedores
                            lleguen a un acuerdo
                        </p>

                        <h5 className="mt-20 lg:mt-20 text-start" style={{ color: '#8A8172' }}>Información</h5>
                        <p className="text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, veritatis quae laboriosam laudantium quis saepe omnis dicta hic incidunt dolores ea commodi deserunt nisi nulla, facilis et ex aut natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium, asperiores commodi, quae enim iste blanditiis repellat mollitia recusandae harum tenetur magnam odio maxime, sit voluptatum veritatis. Nemo, fugit non.
                        </p>
                        <div className='flex w-full justify-center pt-20'>
                            <Image
                                className='margin-auto'
                                src="/images/logofooter.png"
                                alt="Banner"
                                width={140}
                                height={120}
                            />
                        </div>
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