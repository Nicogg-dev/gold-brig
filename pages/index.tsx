import { Inter } from 'next/font/google';
import LayoutHomePage from '@/src/layouts/home';
import Image from 'next/image';
import { Box, Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Footer from '@/src/components/footer';

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutHomePage title='Gold Brick'>
      <Box className="site-home">
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          className='site-home__image'
        />
        <Box className="site-home__content ">
          <h1 className='text-3xl md:text-5xl text-bold text-black'>COMPRA, RENTA Y VENDE</h1>
          <p className='text-lg md:text-2xl md:text-gray-600 text-black'>DE LA MANERA MAS CONFIABLE</p>
        </Box>
      </Box>
      <Box className="site-home-search">
        <Box className="site-home-search__contain">
          <form className="site-home-search__form grid grid-cols-12 gap-4 items-end">

            <Box className="col-span-12 md:col-span-2 flex sm:flex-row md:flex-col justify-center gap-2 sm:mb-4 md:mb-0">
              <Button variant="contained" className='bg-blue-800 text-white site-home-search__button '>Comprar</Button>
              <Button variant="contained" className='bg-white text-blue-800 site-home-search__button'>Rentar</Button>
            </Box>

            <Box className="col-span-12 md:col-span-3 flex flex-col">
              <InputLabel id="ubicacion" className='site-home-search__label'>
                UBICACIÓN
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                autoWidth
                startAdornment={
                  <MdLocationOn fontSize={40} />
                }
                label="Age"
                value="Elige tu ubicacion"
              >
                <MenuItem value="">
                  None
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <Box className="col-span-12 md:col-span-3 flex flex-col">
              <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MINIMO</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                fullWidth
                label="Age"
              >
                <MenuItem value="" disabled>
                  Min
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <Box className="col-span-12 md:col-span-3 flex flex-col">
              <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MAXIMO</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                autoWidth
                label="Age"
              >
                <MenuItem value="" disabled>
                  Max
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <Box className="flex col-span-12 md:col-span-1 bg-yellow-600 justify-center items-center rounded-lg h-12 w-40 md:w-10 md:h-16 hover:bg-yellow-500">
              <Button className='text-2xl text-blue-700'>
                <AiOutlineSearch />
              </Button>
            </Box>
          </form>
          <p className='text-normal text-center mt-5'>Sujerencia de texto : Encuentra tu hogar ideal usando nuestro navegador inteligente</p>
        </Box>
      </Box>
      <Box className="site-home-service mb-5">
        <h3 className="text-4xl md:text-5xl font-normal text-black mb-4">INMOBILIARIA GOLD BRICK</h3>
        <p className="sm:text-xl site-home-service__description">QUIENES SOMOS</p>
      </Box>
      <Box className="grid grid-cols-3 px-10 items-center">
        <p className='col-span-2 text-Amarai-Light fs-5 fw-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          Curabitur tempor quis eros tempus lacinia.
        </p>
        <div className='flex col-span-1 m-auto'>
          <Image
            src="/images/icono-pagina-removebg-preview.png"
            alt="Banner"
            width={140}
            height={120}
          />
        </div>
      </Box>

      <Footer />

      <Box className="d-flex flex-row" sx={{ paddingBottom: "50px", background: "#DFD6BF" }}>
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
      <h2 className='text-center mt-5 mb-5'>
        NUESTROS SERVICIOS
      </h2>
      <Box className="grid grid-cols-2">
        <Box className="col-span-2 lg:col-span-1 p-4">
          <h5 className='text-Amarai-Light  fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='text-Amarai-Regular fs-5 mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
        </Box>
        <Box className="col-span-2 lg:col-span-1 p-4">
          <h5 className='text-Amarai-Light fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='text-Amarai-Regular fs-5  mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
        </Box>
      </Box>
      <Box className="flex w-full h-40 mt-20">
        <div className="flex static items-center justify-center w-full">
          <h5 className="text-black text-4xl font-semibold mx-4 z-10 bg-white px-2">
            CONTACTANOS
          </h5>
          <div className="absolute left-0 h-0.5 bg-black mx-12" style={{ width: '50vw' }}></div>
        </div>
      </Box>
      <footer className='grid grid-cols-2 h-60 mb-10'>
        <div className='flex flex-col items-center justify-center col-span-2 mb-5 lg:col-span-1 lg:mb-0'>
          <div className='col-span-2 lg:col-span-1 '>
            <Image
              className='margin-auto'
              src="/images/icono-pagina-removebg-preview.png"
              alt="Banner"
              width={140}
              height={120}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center col-span-2 lg:col-span-1 lg:items-start'>
          <span className='flex items-center'>
            <IoIosMail className='text-4xl text-blue-950 mr-2' />
            <a href="" className='text-color-yellow'>GOLDBRICKSINVERSIONES@OUTLOOK.COM</a>
          </span>
          <span className='flex mt-4'>
            <FaPhoneAlt className='text-3xl text-blue-950 mr-2' />
            <p className='text-color-yellow'>+57 (317)383 2489</p>
          </span>
          <span className='flex items-center gap-4 mt-4'>
            <a href="#">
              <FaInstagram className='text-3xl text-blue-950' />
            </a>
            <a href="#">
              <FaFacebook className='text-3xl text-blue-950' />
            </a>
            <a href="#">
              <TiMessages className='text-3xl text-blue-950' />
            </a>
          </span>
        </div>
      </footer>
    </LayoutHomePage>
  )
}
