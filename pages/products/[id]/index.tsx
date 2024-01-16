import Image from 'next/image';
import { Box, Grid } from '@mui/material';

import LayoutHomePage from '@/src/layouts/home';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client, urlFor } from '@/utils/sanityClient';

export default function Pages({ id }: { id: string }) {

    const router = useRouter();

    const [apartament, setApartament] = useState({});
    const [url, setUrl] = useState();


    const [tipo, setTipo] = useState(router.query.tipo);

    useEffect(() => {
        // Actualiza el estado 'tipo' cada vez que cambia la query
        setTipo(router.query.tipo);
    }, [router.query.tipo]);

    useEffect(() => {
        const getApartaments = async () => {
            const [res] = await client.fetch(`*[_type == $tipo && _id == $apartamentoId]`, { tipo: tipo, apartamentoId: id });
            setApartament(res);
            const imageurl = res.Imagenes[0].asset._ref;
            setUrl(urlFor(imageurl).url());
        }
        getApartaments();

    }, []);


    const formatoPesos = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    });

    const valor = formatoPesos.format(apartament.precio);
    const administracion = formatoPesos.format(apartament.administracion);


    return (
        <LayoutHomePage title='Gold Brick'>
            <Grid className='px-5 grid grid-cols-12' style={{ border: "3px solid #B8B8B2" }}>
                <Grid item xs={7} className='col-span-12 lg:col-span-7 p-4 '>
                    <Box>
                        <Box >
                            <p className="text-xl md:text-2xl mb-0 mt-4" style={{ color: '#8A8172' }}>INMUEBLES</p>
                            <h2 className="text-3xl md:text-4xl mb-5">DESTACADOS</h2>
                        </Box>
                        
                        {url && <img src={url}
                            alt="Tu imagen"
                            className='position-relative' />}

                        <h3 className='text-2xl font-medium mt-4' style={{ color: '#8A8172' }}>Información</h3>
                        <p className='text-xl font-normal'>{apartament.informacion}</p>
                    </Box>
                </Grid>
                <Grid className='col-span-12 lg:col-span-5'>
                    <Box className="product-information px-3 my-5 pb-3">
                        <h3 className='text-title__product mt-4 mb-5 text-center'>{apartament.Nombre}</h3>
                        <Box className="mb-5">
                            <h4 className="text-medium text-center mb-0 text-xl" style={{ color: '#8A8172' }}>PRECIO ESTANDAR</h4>
                            <p className="text-center font-medium text-xl">{valor}</p>
                        </Box>
                        <Box className="mb-5">
                            <h4 className="text-medium text-center mb-0 text-xl" style={{ color: '#8A8172' }}>UBICACION</h4>
                            <p className="text-center font-medium text-xl">{apartament.ubicacion}</p>
                            <iframe src={apartament.url} width="100%" height="220" style={{ border: 0 }} loading="lazy" ></iframe>
                        </Box>
                        <Box className="grid grid-cols-12 mb-5 border-gray-100 rounded-lg gap-y-8">
                            <Box className="col-span-6 md:col-span-5 flex justify-center border-r-2 border-gray-600 gap-2 p-2">
                                <h4 className='text-sm lg:text-sm font-normalS text-gray-500'>AREA</h4>
                                <p className='text-md h-full font-medium'>{apartament.area} m2</p>
                            </Box>
                            <Box className="col-span-6 md:col-span-3 flex justify-center md:border-r-2 md:border-gray-600 gap-1 p-2">
                                <h4 className='text-sm lg:text-sm font-normal text-gray-500'>CUARTOS</h4>
                                <p className='text-md font-medium'>{apartament.cuartos}</p>
                            </Box>
                            <Box className="col-span-6 md:col-span-4 flex justify-center border-r-2 border-gray-600 md:border-0 gap-2 p-2">
                                <h4 className='text-sm lg:text-sm font-normal text-gray-500'>BAÑOS</h4>
                                <p className='text-md font-medium'>{apartament.banos}</p>
                            </Box>
                            <Box className="col-span-6 md:col-span-5 flex justify-center md:border-r-2 border-gray-600 gap-2 p-2">
                                <h4 className='text-sm lg:text-sm font-normal text-gray-500'>PARQUEADEROS</h4>
                                <p className='text-md font-medium'>{apartament.parqueadero}</p>
                            </Box>
                            <Box className="col-span-6 md:col-span-3 flex justify-center border-r-2 border-gray-600 gap-1 p-2">
                                <h4 className='text-sm lg:text-sm font-normal text-gray-500'>PISO</h4>
                                <p className='text-md font-medium'>{apartament.piso}</p>
                            </Box>
                            <Box className="col-span-6 md:col-span-4 flex justify-center border-gray-600 gap-1 p-2">
                                <h4 className='text-sm lg:text-sm font-normal text-gray-500'>TERRAZA</h4>
                                <p className='text-md font-medium'>{apartament.terraza}</p>
                            </Box>
                        </Box>
                        <Box className="flex justify-between border-t-2 py-4 border-b-2 mb-10">
                            <Box className="flex flex-col me-3">
                                <p className='text-base text-gray-500 text-center'>ADMINISTRACION</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>{administracion}</span>
                            </Box>
                            <Box className="d-flex flex-column me-3">
                                <p className='text-base text-gray-500 text-center'>ESTRATO</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>{apartament.estrato}</span>
                            </Box>
                            <Box className="d-flex flex-column">
                                <p className='text-base text-gray-500 text-center'>AÑO DE LA CASA</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>{apartament.ano}</span>
                            </Box>
                        </Box>
                        <h4 className='text-base text-gray-500 text-center'>CARACTERISTICAS</h4>
                        <ul className='list-disc pl-4 ml-4'>
                            {apartament.Caracteristicas?.map((caracteristica, index) => (
                                <li key={index} className='text-base'>{caracteristica}</li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grid>

            <footer>
                <img src="@/public/images/logoend.png" alt="" />
            </footer>
        </LayoutHomePage>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;



    // Retorna los datos como props
    return {
        props: {
            id
        },
    };
}
