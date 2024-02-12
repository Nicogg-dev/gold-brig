import { Inter } from 'next/font/google';
import LayoutHomePage from '@/src/layouts/home';
import Image from 'next/image';
import { Box, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { AiOutlineSearch } from "react-icons/ai";
import Footer from '@/src/components/footer';

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { client } from '@/utils/sanityClient';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [ubicacion, setUbicacion] = useState([]);
  const [ubicacionValue, setUbicacionValue] = useState('');
  const [inmuebleValue, setInmuebleValue] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Construct the URL based on the selected values
    if(ubicacionValue == "" || inmuebleValue == ""){
      alert("Por favor llene todos los campos");
      return
    }
    if(inmuebleValue == "lotes"){
      const url1 = `/search?tipo=ventaap&ubicacion=${ubicacionValue}&inmueble=${inmuebleValue}`;
      window.location.href = url1;
    }else{
      const url2 = `/search?tipo=arriendoap&ubicacion=${ubicacionValue}&inmueble=${inmuebleValue}`;
      window.location.href = url2;
    }
    // Redirect to the constructed URL
    /* window.location.href = url; */
  };

  useEffect(() => {
    const getUbicacion = async () => {
      const res1 = await client.fetch(`*[_type == "ventaap"]{ubicacion}`);
      const res2 = await client.fetch(`*[_type == "arriendoap"]{ubicacion}`);
      const res3 = await client.fetch(`*[_type == "vacacionalesap"]{ubicacion}`);
      const combinedResults = [...res1, ...res2, ...res3];
      const ubicacionSet = new Set();
      combinedResults.forEach(item => {
        ubicacionSet.add(item.ubicacion);
      });
      const departamentos = Array.from(ubicacionSet);
      setUbicacion(departamentos as never[]);
    };
    getUbicacion();
  }, []);

  return (
    <LayoutHomePage title='Gold Brick'>
      <Box className="site-home">
        <Image
          src="/images/final.png"
          alt="Banner"
          fill
          className='site-home__image'
        />
        <Box className="site-home__content pb-2 pl-3">
          <h1 className='text-3xl text-white md:text-5xl text-bold'>COMPRA, RENTA Y VENDE</h1>
          <p className='text-lg text-white md:text-xl md:text-gray-600 '>EN MANOS DE EXPERTOS</p>
        </Box>
      </Box>
      <Box className="site-home-search">
        <Box className="site-home-search__contain">

          <form className="grid items-center grid-cols-12 gap-4 site-home-search__form"
            onSubmit={handleFormSubmit}>
            <Box className="grid grid-cols-12 md:flex justify-center col-span-12 gap-2 md:col-span-2 sm:flex-row md:flex-col sm:mb-4 md:mb-0">
              <button className='col-span-6 h-20 font-bold bg-blue-700 rounded-lg px-1'>
                <Link href="/search?tipo=ventaap" className='w-full text-white no-underline'>
                  Comprar
                </Link>
              </button>
              <button id="contained" className='col-span-6 h-20 font-bold rounded-lg px-2 text-blue-800 bg-white'>
                <Link href="/search?tipo=arriendoap" className='w-full no-underline text-blue-950'>
                  Rentar
                </Link>
              </button>
            </Box>

            <Box className="flex flex-col col-span-12 md:col-span-4">
              <InputLabel id="ubicacion" className='mb-2 text-lg font-bold text-black md:text-xl'>UBICACION</InputLabel>
              <Select
                className='h-10'
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                fullWidth
                label="Ubicacion"
                value={ubicacionValue}
                onChange={(event) => setUbicacionValue(event.target.value)}
              >
                <MenuItem value="" disabled>
                  Ubicaciones disponibles en todas las secciones
                </MenuItem>
                {
                  ubicacion.map((item, index) => (
                    <MenuItem key={index} value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
            </Box>
            <Box className="flex flex-col col-span-12 md:col-span-4">
              <InputLabel id="tipoInmueble" className='mb-2 text-lg font-bold text-black md:text-xl'>TIPO DE INMUEBLE</InputLabel>
              <Select
                className='h-10 text-gray-600'
                labelId="demo-simple-select-autowidth-label"
                id="inmueble"
                fullWidth
                label="Age"
                value={inmuebleValue}
                onChange={(event) => setInmuebleValue(event.target.value)}
              >
                <MenuItem value="" disabled>
                  Min
                </MenuItem>
                <MenuItem value={"casa"}>Casas</MenuItem>
                <MenuItem value={"apartamento"}>Apartamentos</MenuItem>
                <MenuItem value={"local"}>Locales Comerciales</MenuItem>
                <MenuItem value={"lote"}>Lotes</MenuItem>
                <MenuItem value={"bodega"}>Bodegas</MenuItem>
              </Select>
            </Box>
            <Box className="flex items-center justify-center w-40 h-12 col-span-12 bg-gray-700 rounded-lg md:col-span-2 md:w-16 md:h-16 hover:bg-white"
              style={{ backgroundColor: '#8a8073' }}>
              <button className='text-2xl text-white' type='submit'>
                <AiOutlineSearch className='text-3xl' />
              </button>
            </Box>
          </form>
          <p className='mt-5 font-light text-center text-gray-700 sm:text-xl md:text-2xl'>Sujerencia de texto : Encuentra tu hogar ideal usando nuestro navegador inteligente</p>
        </Box>
      </Box>
      <Box className="mb-5 text-center site-home-service">
        <h3 className="mb-4 text-2xl font-bold text-black md:text-4xl">INMOBILIARIA GOLD BRICKS</h3>

        <Box className="flex w-full">
          <div className="static flex items-center justify-center w-full">
            <h5 className="z-10 px-2 mx-4 text-xl font-semibold bg-white" style={{ fontFamily: 'Amiri Regular', color: '#856106' }}>
              CONTACTANOS
            </h5>
            <div className="absolute h-0.5" style={{ width: '50vw', background: '#856106' }}></div>
          </div>
        </Box>
      </Box>
      <Box className="grid items-center grid-cols-3 px-20 mb-20">
        <p className='col-span-3 font-semibold md:col-span-2 text-Amarai-Light md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          Curabitur tempor quis eros tempus lacinia.
        </p>
        <div className='flex col-span-3 m-auto md:col-span-1'>
          <Image
            src="/images/logofooter.png"
            alt="Banner"
            width={140}
            height={120}
          />
        </div>
      </Box>


      <Box className="flex-row d-flex" sx={{ paddingBottom: "50px", background: "#DFD6BF" }}>
        <Image
          src="/images/imageHome1.png"
          alt="image-home-1"
          fill
          className='site-home-images'
        />
        <Image
          src="/images/imageHome2.png"
          alt="image-home-2"
          fill
          className='site-home-images'
        />
        <Image
          src="/images/imageHome3.png"
          alt="image-home-3"
          fill
          className='site-home-images'
        />

      </Box>
      <h2 className='mt-5 mb-5 text-center'>
        NUESTROS SERVICIOS
      </h2>
      <Box className="grid grid-cols-2">
        <Box className="col-span-2 p-4 lg:col-span-1">
          <h5 className='text-Amarai-Light fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='mt-5 text-Amarai-Regular fs-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
        </Box>
        <Box className="col-span-2 p-4 lg:col-span-1">
          <h5 className='text-Amarai-Light fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='mt-5 text-Amarai-Regular fs-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
        </Box>
      </Box>

      <Footer />

      <Box className="flex w-full h-40 mt-20">
        <div className="static flex items-center justify-center w-full">
          <h5 className="z-10 px-2 mx-4 text-2xl font-semibold text-black bg-white md:text-4xl">
            CONTACTANOS
          </h5>
          <div className="absolute left-0 h-0.5 bg-black mx-12" style={{ width: '50vw' }}></div>
        </div>
      </Box>
      <footer className='grid grid-cols-2 mb-10 h-60'>
        <div className='flex flex-col items-center justify-center col-span-2 mb-5 lg:col-span-1 lg:mb-0'>
          <div className='col-span-2 lg:col-span-1 '>
            <Image
              className='margin-auto'
              src="/images/logofooter.png"
              alt="Banner"
              width={140}
              height={120}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center col-span-2 lg:col-span-1 lg:items-start'>
          <span className='flex items-center'>
            <IoIosMail className='mr-2 text-4xl text-blue-950' />
            <Link
              href="mailto:GOLDBRICKSINVERSIONES@OUTLOOK.COM?subject=Asunto del correo&body=Cuerpo del mensaje"
              className='text-color-yellow'
              target="_blank" rel="noopener noreferrer">
              GOLDBRICKSINVERSIONES@OUTLOOK.COM
            </Link>
          </span>
          <span className='flex mt-4'>
            <FaPhoneAlt className='mr-2 text-3xl text-blue-950' />
            <p className='text-color-yellow'>+57 (317)383 2489</p>
          </span>
          <span className='flex items-center gap-4 my-4'>
            <Link
              href="https://www.instagram.com/inmo.goldbricks?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank">
              <FaInstagram className='text-3xl text-blue-950' />
            </Link>
            <Link href="#">
              <FaFacebook className='text-3xl text-blue-950' />
            </Link>
          </span>
        </div>
      </footer>
    </LayoutHomePage>
  )
}
