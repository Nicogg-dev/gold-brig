
import { Box } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from '@/src/components/productCard';
import LayoutHomePage from '@/src/layouts/home';

export default function Search() {
  return (
    <LayoutHomePage  title='Gold Brick'>
      <Box className="site-search mt-5">
        <Box className="site-search-background">
          <Box className="d-flex flex-row position-absolute" sx={{zIndex:2,top:"calc(15vh - 25px)"}}>
            <AiOutlineArrowLeft className='site-search-icons' color='white' fontSize={50}/>
            <AiOutlineArrowRight className='site-search-icons' color='white' fontSize={50} />
          </Box>
          <Box className="site-search-products">
            <ProductCard />
            <ProductCard />
          </Box>
          <Box className="site-search-products mt-4">
            <ProductCard />
            <ProductCard />
          </Box>
        </Box>
        <Box className="site-search-info">
          <h3 className='text-center text-subtitle fw-normal'>
            INMUEBLES
          </h3>
          <h2 className='text-center text-title'>
            DESTACADOS
          </h2>
          <p className='text-center text-description fs-4'>
            Sugerencia para texto: Busca
            entre la galería de propiedades
            que tenemos para ti
          </p>
        </Box>
        

      </Box>
    </LayoutHomePage>
  )
}
