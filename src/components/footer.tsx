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
                    <h5 className='text-light fs-3 fw-bolder mb-5'>
                        SOBRE
                        <span className="ml-3" style={{ color: '#856106' }}>GOLD BRICK</span>
                    </h5>

                </Box>
                <Box className="grid grid-cols-12 gap-10" >
                    <Box className="col-span-12 md:col-span-5 flex w-full justify-center border-r-2 border-gray-600">
                        <p className='text-white font-light md:font-light text-base lg:text-lg pl-3' style={{ maxWidth: "300px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exbercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </Box>
                    <Box className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
                        <h5 className='font-semibold text-white text-xl'>NUESTRAS <br></br> ESPECIALIZACIONES</h5>
                        <div className='flex sm:flex-row md:flex-col px-3'>
                            <Image src="/images/hombreconlupa.png" alt="Banner" width={90} height={90} className='site-home__image' />
                            <p className='text-light text-lg md:text-xl'>
                                Think voluminous
                            </p>
                            <Image src="/images/porcentaje.png" alt="Banner" width={80} height={80} className='site-home__image' />
                            <p className='text-light text-lg md:text-xl'>
                                Think voluminous
                            </p>
                            <Image src="/images/sold.png" alt="Banner" width={80} height={80} className='site-home__image' />
                            <p className='text-light text-lg md:text-xl'>
                                Think voluminous
                            </p>
                        </div>
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