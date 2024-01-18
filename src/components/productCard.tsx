import React from 'react';
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

  const formatoPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  });
  const valor = formatoPesos.format(precio);

  return (
    <div className='p-4 w-full col-span-6'>
      <Link
        href={`/products/[parametro]?tipo=${tipo}`}
        as={`/products/${_id}?tipo=${tipo}`}>
        <Image
          src={urlFor(Imagenes[0].asset._ref).url()}
          alt='product image'
          className='position-relative relative'
          quality={80}
          width={500}
          height={500}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      </Link>
      <Box className="border-x-2 border-b-2 border-gray-400">
        <Box className="flex justify-center gap-6 pt-2">
          <Box className="flex flex-col">
            <h4 className='font-semibold text-center text-sm text-gray-500'>
              UBICACION
            </h4>
            <p className='text-center text-lg font-normal'>
              {ubicacion}
            </p>
          </Box>
          <Box className="flex flex-col">
            <h4 className='font-semibold text-center text-sm text-gray-500'>
              STARTING PRICE
            </h4>
            <p className='text-center text-lg font-normal'>
              {valor}
            </p>
          </Box>
        </Box>
        <Box className="grid grid-cols-12 border-t-2 ">
          <Box className="col-span-4 flex gap-2 pt-2 mt-2 mb-1 px-2 border-r-2 border-gray-600 justify-center">
            <h5 className='font-semibold text-sm text-gray-500'>AREA (m2) </h5>
            <p className='text-sm'>{area} m2</p>
          </Box>

          <Box className="col-span-4 flex gap-2 pt-2 mt-2 mb-1 px-2 border-r-2 border-gray-600 justify-center">
            <h5 className='font-semibold text-sm text-gray-500'>CUARTOS </h5>
            <p className='text-sm'>{cuartos}</p>
          </Box>

          <Box className="col-span-4 flex gap-2 pt-2 mt-2 mb-1 px-2 justify-center">
            <h5 className='font-semibold text-sm text-gray-500'>BAÑOS </h5>
            <p className='text-sm'>{banos}</p>
          </Box>
        </Box>

      </Box>
    </div>
  );
};

export default ProductCard;