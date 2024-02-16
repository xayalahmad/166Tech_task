import Box from '@mui/material/Box';

export default function MostUsedSidebar() {
    return (
        <Box sx={{ backgroundColor: '#fafafa' }} className='p-7 rounded-xl'>
            <Box className=' font-semibold text-xl'>
                Filter
            </Box>
            <Box className=' font-normal text-sm pt-7 pb-2 opacity-60'>
                Kateqoriyalar
            </Box>
            <Box sx={{ padding: '10px 15px' }} className=' cursor-pointer bg-black duration-300 text-white rounded-xl my-3'>
                Ibtidai sinif
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Buraxılış
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Blok
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Təkmilləşdirmə
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Liseylərə
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Magistratura
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Olimpiada
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                Fənn imtahanı
            </Box>

            <Box className=' font-normal text-sm pt-7 pb-2 opacity-60'>
                Etiketlər
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                2-ci sinif
            </Box>
            <Box sx={{ padding: '10px 15px', backgroundColor: '#f5f5f5', border: '1px solid #f5f5f5' }} className=' cursor-pointer border hover:border-black duration-300 text-black rounded-xl my-3'>
                3-cü sinif
            </Box>
            <Box sx={{ padding: '10px 15px' }} className=' cursor-pointer bg-black duration-300 text-white rounded-xl my-3'>
            4-cü sinif
            </Box>
        </Box>
    )
}