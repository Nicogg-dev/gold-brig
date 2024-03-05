import React, { useState } from 'react';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import { urlFor } from '@/utils/sanityClient';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  apartment: ApartmentType;
  tipo: string;
}

interface ApartmentType {
  ubicacion: string;
  precio: number;
  area: number;
  cuartos: number;
  banos: number;
  Imagenes: Array<any>;
  _id: string;
}

const ProductCard: NextPage<ProductCardProps> = ({ apartment, tipo }) => {

  const { ubicacion, precio, area, cuartos, banos, Imagenes, _id } = apartment;

  const [imagenes, setImagenes] = useState(Imagenes);

  const formatoPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  });
  const valor = formatoPesos.format(precio);

  return (
    <div className='w-full col-span-6 p-4'>
      <Link
        href={`/products/[parametro]?tipo=${tipo}`}
        as={`/products/${_id}?tipo=${tipo}`}>
        <Image
          src={urlFor(Imagenes[0]?.asset._ref).url()}
          alt='product image'
          className='relative position-relative'
          quality={80}
          width={500}
          height={500}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      </Link>
      <Box className="border-b-2 border-gray-400 border-x-2">
        <Box className="flex justify-center gap-6 pt-2">
          <Box className="flex flex-col">
            <h4 className='text-sm font-semibold text-center text-gray-500'>
              UBICACION
            </h4>
            <p className='text-lg font-normal text-center'>
              {ubicacion}
            </p>
          </Box>
          <Box className="flex flex-col">
            <h4 className='text-sm font-semibold text-center text-gray-500'>
              STARTING PRICE
            </h4>
            <p className='text-lg font-normal text-center'>
              {valor}
            </p>
          </Box>
        </Box>
        <Box className="grid grid-cols-12 border-t-2 ">
          <Box className="flex flex-col justify-center col-span-4 gap-2 px-2 pt-2 mt-2 mb-1 border-r-2 border-gray-600 md:flex-row">
            <h5 className='text-sm font-semibold text-gray-500'>AREA (m2) </h5>
            <p className='text-sm'>{area} m2</p>
          </Box>

          <Box className="flex flex-col justify-center col-span-4 gap-2 px-2 pt-2 mt-2 mb-1 border-r-2 border-gray-600 md:flex-row">
            <h5 className='text-sm font-semibold text-gray-500'>CUARTOS </h5>
            <p className='text-sm'>{cuartos}</p>
          </Box>

          <Box className="flex flex-col justify-center col-span-4 gap-2 px-2 pt-2 mt-2 mb-1 md:flex-row">
            <h5 className='text-sm font-semibold text-gray-500'>BAÑOS </h5>
            <p className='text-sm'>{banos}</p>
          </Box>
        </Box>

      </Box>
    </div>
  );
};

export default ProductCard;