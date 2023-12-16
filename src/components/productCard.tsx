import React from 'react';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';
import { StyledDividerHorizontal, StyledDividerVertical } from '../stylesComponent/divider';

const ProductCard: NextPage = () => {
  return (
    <Box className="site-search_product">
    <Image
            src="/images/casa-arriendo.jpg"
            alt="Banner"
            fill
            className='position-relative site-search_product-image'
        />
      <Box className="d-flex flex-column px-3" sx={{border:"2px solid rgb(184,184,178)"}}>
        <Box className="d-flex flex-row justify-content-between">
          <Box className="d-flex flex-column">
            <p className='text-bold text-center mb-0 mt-2'>
              UBICACION
            </p> 
            <p className='text-normal__big'>
              West Palm Beach, 27th Road
            </p>
          </Box>
          <Box className="d-flex flex-column me-5">
            <p className='text-bold text-center mb-0 mt-2'>
             STARTING PRICE
            </p> 
            <p className='text-normal__big text-center'>
              $2.500.000.000
            </p>
          </Box>
        </Box> 
        <StyledDividerHorizontal className='mb-2' />
        <Box className="d-flex flex-row justify-content-around">
          <Box className="d-flex flex-row align-items-center">
          <p className='text-title__product-subtitle my-0'>AREA </p>
          <span className='ms-3 fw-normal fs-5  text-normal__big'>2000 m2</span>
          </Box>
          <StyledDividerVertical orientation="vertical"  flexItem />
          <Box className="d-flex flex-row align-items-center">
          <p className='text-title__product-subtitle my-0'>CUARTOS </p>
          <span className='ms-3 fw-normal fs-5  text-normal__big'>4</span>
          </Box>
          <StyledDividerVertical orientation="vertical"  flexItem />
          <Box className="d-flex flex-row align-items-center">
          <p className='text-title__product-subtitle my-0'>BAÑOS </p>
          <span className='ms-3 fw-normal fs-5  text-normal__big'>5</span>
          </Box>
        </Box>
        
      </Box>
  </Box>
  );
};

export default ProductCard;