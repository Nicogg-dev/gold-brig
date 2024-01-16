import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import ProductCard from '@/src/components/productCard';
import LayoutHomePage from '@/src/layouts/home';
import { client } from "@/utils/sanityClient";


export default function Search() {

  const router = useRouter();

  const [apartaments, setApartaments] = useState([]);

  const [range, setRange] = useState(3000);
  const [area, setArea] = useState(3000);
  const [selectedCity, setSelectedCity] = useState('');
  const [inmueble, setInmueble] = useState();

  useEffect(() => {
    if (router.query.ubicacion) {
      setSelectedCity(router.query.ubicacion);
    }else{
      setSelectedCity('');
    }
  }, [router.query.ubicacion]);

  useEffect(() => {
    if (router.query.inmueble) {
      setInmueble(router.query.inmueble);
    }else{
      setInmueble('');
    }
  }, [router.query.inmueble]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
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
      const ubicacionSet = new Set();
      res.forEach(item => {
        ubicacionSet.add(item.ubicacion);
      });
      const departamentos = Array.from(ubicacionSet);
      setUbicacion(departamentos);
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


  const CustomPrevArrow: React.FC<ArrowProps & React.HTMLAttributes<HTMLDivElement>> = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} currentslide={currentSlide} slidecount={slideCount} className="absolute top-1/2 -left-5 transform -translate-y-1/2 text-white text-lg cursor-pointer z-20 rounded-full p-1" style={{ background: '#caad9e' }}>
      {/* Personaliza la flecha hacia la izquierda aquí */}
      &#8592;
    </div>
  );

  const CustomNextArrow: React.FC<ArrowProps & React.HTMLAttributes<HTMLDivElement>> = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} currentslide={currentSlide} slidecount={slideCount} className="absolute top-1/2 -right-5 transform -translate-y-1/2 text-white text-lg cursor-pointer z-20 rounded-full p-1" style={{ background: '#caad9e' }}>
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        }
      }
    ]
  };

  const defaultValue = '';

  return (
    <LayoutHomePage title='Gold Brick'>


      <Box className="grid grid-cols-3 grid-rows-3 py-2 px-2 gap-5">

        <Box className="col-span-3 lg:col-span-1 row-span-3 m-auto grid grid-cols-12 w-full px-4 pt-10">
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
            <div className="flex flex-col text-center mt-3">
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
              <InputLabel id="ubicacion" className='font-light text-black mb-1 text-base'>Buscar por zona o ciudad</InputLabel>
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
          </div>
          <div className="col-span-12">
            <h3 className='text-2xl text-center text-stone-500 mt-5 md:mt-0'>
              APARTAMENTOS EN
            </h3>
            <h3 className='text-2xl text-center text-stone-500'>
              {tipo?.slice(0, -2).toUpperCase()}
            </h3>
            <h2 className='text-center font-bold text-3xl md:text-4xl'>
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

        <Box className="col-span-3 lg:col-span-2 flex relative justify-center mt-10 row-span-3">
          <div className="absolute w-3/4 lg:w-full h-28 top-0 " style={{ background: '#baad9e' }}>
            {/* Fondo solo en la parte superior */}
          </div>
          <Slider {...settings} className="w-96 lg:w-11/12 m-auto">
            {apartaments.map((apartment) => (
              <ProductCard tipo={tipo} apartment={apartment} key={apartment._id} />
            ))}
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
