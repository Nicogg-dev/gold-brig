import React from 'react';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';

const Footer: NextPage = () => {
    return (
        <footer className='site-footer'>
            <Box className="">
                <Box className="flex justify-center gap-10 md:gap-40 px-2">
                    <h5 className='text-light fs-3 fw-bolder mb-5'>NUESTRA META</h5>
                    <h5 className='text-light fs-3 fw-bolder mb-5 site-footer-content-title-complete'>
                        SOBRE
                        <span className="site-footer-content-title ms-3">GOLD BRICK</span>
                    </h5>

                </Box>
                <Box className="grid grid-cols-12 gap-10" >
                    <Box className="col-span-12 md:col-span-5 flex justify-center border-r-2 border-gray-600">
                        <p className='site-footer-parrafo' style={{ maxWidth: "300px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exbercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </Box>
                    <Box className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
                        <h5 className='text-light fs-3 fw-bolder'>NUESTRAS <br></br> ESPECIALIZACIONES</h5>
                        <Image src="/images/hombreconlupa.png" alt="Banner" width={100} height={100} className='site-home__image' />
                        <p className='text-light fs-4'>
                            Think voluminous
                        </p>
                        <Image src="/images/porcentaje.png" alt="Banner" width={100} height={100} className='site-home__image' />
                        <p className='text-light fs-4'>
                            Think voluminous
                        </p>
                        <Image src="/images/sold.png" alt="Banner" width={100} height={100} className='site-home__image' />
                        <p className='text-light fs-4'>
                            Think voluminous
                        </p>
                    </Box>
                    <Box className="col-span-12 md:col-span-3 flex justify-center items-center">
                        <div className='w-60'>
                            <Image src="/images/casa.png" alt="Banner" fill className='site-home__image' />
                        </div>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;