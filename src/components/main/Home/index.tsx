import Box from '@mui/material/Box';
import homeBgImage from '../../../../public/homePageBgImg.png'
export default function Home(){
    return(
        <div className='relative'>
        <Box component="img"  className='w-full min-h-64 object-cover' src={homeBgImage}>
        </Box>
        <div  className=' absolute  w-4/5 md:w-1/2 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
            <div className='text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-white'>
                İmtahanlar
            </div>
            <div className=' text-sm md:text-base text-white w-full'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </div>
        </div>
      
        </div>
    )
}