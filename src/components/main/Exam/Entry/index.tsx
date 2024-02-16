import examPageBgImg from '../../../../../public/examPageBg.png'
import Box from '@mui/material/Box';

export default function Entry() {
    return (
        <Box className='bg-black rounded-xl w-4/5 block md:flex  items-center  m-auto h-100 pt-10 px-10 md:pt-16 md:px-14' >
                <Box className=' block md:flex items-end justify-between w-full'>
                    <Box className='text-white md:w-full py-0 px-0 mb-10  ' >
                        <Box className=' text-2xl md:text-4xl font-bold mb-2 md:mb-5'>
                            3-cü sinif imtahanı
                        </Box>
                        <Box className='text-sm mb-0 md:mb-5' component='li'>Lorem Ipsum is simply dummy text of the printing and typesetting</Box>
                        <Box className='text-sm mb-0 md:mb-3' component='li'>Lorem Ipsum has been the industry's standard dummy text ever</Box>
                        <Box className='text-sm' component='li'>Lorem Ipsum has been the industry's standard dummy text ever</Box>
                        <Box className=' text-base font-medium bg-white text-black rounded-xl inline-block cursor-pointer hover:bg-slate-300 duration-300 mt-12' sx={{padding: '10px 20px'}}>
                            1 Azn - imtahanı al
                        </Box>
                    </Box>
                </Box>
        </Box>
    )
}