import Box from '@mui/material/Box';
import time from '../../../../../../../public/time.svg'
import starBlack from '../../../../../../../public/starBlack.svg'
import starGrey from '../../../../../../../public/starGrey.svg'
export default function Card() {
    return (
        <>
            <Box sx={{ backgroundColor: '#fafafa' }} className='p-7 rounded-xl'>
                <Box className='text-xl font-bold mb-7'>
                    3-cü sinif imtahanı
                </Box>
                <Box className='flex justify-between '>
                    <Box className='flex'>

                        <img src={time} className='mr-3' />
                        <Box className='text-sm'>45 dəqiqə</Box>
                    </Box>
                    <Box className='flex'>
                        <img src={starBlack} />
                        <img src={starBlack} />
                        <img src={starBlack} />
                        <img src={starBlack} />
                        <img src={starGrey} />
                    </Box>
                </Box>

                <Box sx={{borderBottom: '1px solid #d9d9d9'}} className='mt-5 pb-5'>
                    <Box className='mb-3 font-medium text-base'>
                        Suallar
                    </Box>
                    <Box className=' text-sm' component='li'>
                        10 sual- Azərbaycan dili
                    </Box>
                    <Box className=' text-sm' component='li'>
                        10 sual-Riyaziyyat
                    </Box>
                </Box>

                <Box className='flex gap-3 mt-5 mb-7'>
        <Box sx={{backgroundColor: '#d9d9d9'}} className=' font-medium text-sm rounded-xl py-1 px-4 whitespace-nowrap'>
            İbtidai sinif
        </Box>
        <Box sx={{backgroundColor: '#d9d9d9'}} className=' font-medium text-sm rounded-xl py-1 px-4 whitespace-nowrap'>
        3-cü sinif
        </Box>
                </Box>

                <Box sx={{padding: '10px 0'}} className='bloc border border-black rounded-xl text-center hover:bg-black hover:text-white duration-300 cu'>
                    1 AZN - indi al
                </Box>

            </Box>
        </>
    )
}