import React, { useEffect, useState, ReactNode } from "react";
import { useRouter } from 'next/router';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ProductCard from '@/src/components/productCard';
import LayoutHomePage from '@/src/layouts/home';
import { client } from "@/utils/sanityClient";
import Image from "next/image";

import { FaArrowAltCircleRight } from "react-icons/fa";

type UbicacionType = string;

type ApartmentType = {
  _id: string;
  ubicacion: string;
  precio: number;
  area: number;
  cuartos: number;
  banos: number;
  Imagenes: {
    asset: {
      _ref: string;
    };
  }[];
  // Otras propiedades específicas de cada apartamento
};

export default function Search() {

  const router = useRouter();

  const [apartaments, setApartaments] = useState<ApartmentType[]>([]);

  const [range, setRange] = useState(3000);
  const [area, setArea] = useState(3000);
  const [selectedCity, setSelectedCity] = useState('');
  const [inmueble, setInmueble] = useState('');

  useEffect(() => {
    if (router.query.ubicacion) {
      setSelectedCity(Array.isArray(router.query.ubicacion) ? router.query.ubicacion[0] : router.query.ubicacion);
    } else {
      setSelectedCity('');
    }
  }, [router.query.ubicacion]);

  useEffect(() => {
    if (router.query.inmueble) {
      setInmueble(Array.isArray(router.query.inmueble) ? router.query.inmueble[0] : router.query.inmueble);
    } else {
      setInmueble('');
    }
  }, [router.query.inmueble]);

  const handleCityChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    setSelectedCity(event.target.value);
  };

  const handleInmuebleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInmueble(event.target.value);
  };

  const [tipo, setTipo] = useState(router.query.tipo);
  const [ubicacion, setUbicacion] = useState([]);


  useEffect(() => {
    // Actualiza el estado 'tipo' cada vez que cambia la query
    setTipo(router.query.tipo);
  }, [router.query.tipo]);

  useEffect(() => {
    const getUbicacion = async () => {
      const res = await client.fetch(`*[_type == "${tipo}"]{ubicacion}`);
      const ubicacionSet = new Set<unknown>();
      res.forEach((item: { ubicacion: unknown }) => {
        ubicacionSet.add(item.ubicacion);
      });
      const departamentos = Array.from(ubicacionSet) as UbicacionType[];
      setUbicacion(departamentos as never[]);
    };
    getUbicacion();
  }, [tipo]);


  useEffect(() => {
    const getApartaments = async () => {
      let query = `*[_type == "${tipo}" && precio < ${range * 1000000} && area < ${area}`;
      if (inmueble) {
        query += ` && Tipo == "${inmueble}"`;
      }
      if (selectedCity !== '') {
        query += ` && ubicacion == "${selectedCity}"`;
      }
      query += ']';

      const res = await client.fetch(query);

      setApartaments(res);
    }
    getApartaments();

  }, [tipo, range, area, selectedCity, inmueble]);


  type ArrowProps = {
    currentSlide: number;
    slideCount: number;
  };

  const CustomPrevArrow: React.FC<ArrowProps & React.HTMLAttributes<HTMLDivElement>> = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className="absolute z-20 p-1 mx-10 text-lg text-white transform -translate-y-1/2 rounded-full cursor-pointer top-1/2 -left-5" style={{ background: '#caad9e' }}>
      {/* Personaliza la flecha hacia la izquierda aquí */}
      &#8592;
    </div>
  );

  const CustomNextArrow: React.FC<ArrowProps & React.HTMLAttributes<HTMLDivElement>> = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className="absolute z-20 p-1 mx-10 text-lg text-white transform -translate-y-1/2 rounded-full cursor-pointer top-1/2 -right-5 " style={{ background: '#caad9e' }}>
      {/* Personaliza la flecha hacia la derecha aquí */}
      &#8594;
    </div>
  );

  /* const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }; */
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow currentSlide={0} slideCount={0} />,
    nextArrow: <CustomNextArrow currentSlide={0} slideCount={0} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          prevArrow: <CustomPrevArrow currentSlide={0} slideCount={0} />,
          nextArrow: <CustomNextArrow currentSlide={0} slideCount={0} />,
        }
      }
    ]
  };


  return (
    <LayoutHomePage title='Gold Brick'>


      <Box className="grid grid-cols-3 grid-rows-3 gap-5 px-2 py-2">

        <Box className="grid w-full grid-cols-12 col-span-3 row-span-3 px-4 pt-10 m-auto lg:col-span-1">
          <div className="col-span-12">
            <div className="flex flex-col py-2 text-center">
              <h4 className="text-base">Precio $43 - ${range} millones o mas</h4>
              <input
                type="range"
                min="43"
                max="3000"
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                className="appearance-none w-full h-0.5 bg-blue-950 rounded-md outline-none transition duration-300 ease-in-out hover:bg-gray-900 hover:shadow-md active:bg-black"
              />
            </div>
            <div className="flex flex-col mt-3 text-center">
              <h4 className="text-base">Area 9m2 - {area}m2 o mas</h4>
              <input
                type="range"
                min="9"
                max="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="appearance-none w-full h-0.5 bg-blue-950 rounded-md outline-none transition duration-300 ease-in-out hover:bg-gray-900 hover:shadow-md active:bg-black"
              />
            </div>
            <div className="pt-4 text-center">
              <InputLabel id="ubicacion" className='mb-1 text-base font-light text-black'>Buscar por zona o ciudad</InputLabel>
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
                  Buscar por Ciudad
                </MenuItem>
                <MenuItem value=''>Todas las ciudades</MenuItem>
                {
                  ubicacion.map((item, index) => (
                    <MenuItem key={index} value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
            </div>
            <div className="pt-2 text-center">
              <InputLabel id="tipoInmueble" className='mb-1 text-base font-light text-black'>Tipo de inmueble</InputLabel>
              <Select
                className='h-8'
                labelId="demo-simple-select-autowidth-label"
                id="inmueble"
                fullWidth
                label="Age"
                value={inmueble}
                onChange={handleInmuebleChange}
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
            </div>
          </div>
          <div className="col-span-12">
            <h3 className='mt-5 text-2xl text-center text-stone-500 md:mt-0'>
              APARTAMENTOS EN
            </h3>
            <h3 className='text-2xl text-center text-stone-500'>
              {Array.isArray(tipo) ? tipo[0].toUpperCase() : tipo?.slice(0, -2).toUpperCase()}
            </h3>
            <h2 className='text-3xl text-center md:text-4xl'>
              DESTACADOS
            </h2>
            <p className='text-xl font-light text-center'>
              {tipo === 'ventaap' && (
                'Los mas buscados por nuestros clientes'
              )}
              {tipo === 'arriendoap' && (
                'Los preferidos por nuestros clientes'
              )}
              {tipo === 'vacacionalesap' && (
                'Ofrecemos rentas de apartamentos vacacionales por dia para nuestros aliados y el publico en general'
              )}
            </p>
          </div>
        </Box>

        <Box className="relative flex justify-center col-span-3 row-span-3 mt-10 lg:col-span-2">
          <div className="absolute top-0 w-3/4 lg:w-full h-28 " style={{ background: '#baad9e' }}>
            {/* Fondo solo en la parte superior */}
          </div>
          <Slider {...settings} className="m-auto w-96 lg:w-11/12">

            {apartaments ? (
              apartaments.map((apartment) => (
                <ProductCard
                  tipo={Array.isArray(tipo) ? tipo.join("") : tipo || ""}
                  apartment={apartment}
                  key={apartment._id}
                />
              ))
            ) : (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
              </div>
            )}
            {/* Tarjetas que ocuparán el espacio restante */}
            {/* <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div> */}
          </Slider>
        </Box>
      </Box>
    </LayoutHomePage>
  )
}
