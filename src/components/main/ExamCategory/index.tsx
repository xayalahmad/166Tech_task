import Box from '@mui/material/Box';
export default function ExamCategory() {
    return (
        <>
            <div className='w-4/5 md:w-6/12 mx-auto my-10 md:my-24'>
                <div className="flex flex-col items-center">
                    <div className="text-base mb-3 md:mb-5">İmtahan</div>
                    <div className='text-3xl md:text-4xl font-bold'>
                        Kateqoriya seç
                    </div>
                </div>
                <div className="flex flex-wrap gap-4     mt-10 justify-center md:justify-center">
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Buraxılış
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Blok
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Təkmilləşdirmə
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        İbtidai sinif
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Liseylərə
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Magistratura
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Olimpiadalar
                    </Box>
                    <Box sx={{ backgroundColor: '#fafafa', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }} className=" h-24 flex items-center justify-center w-44 whitespace-nowrap text-base font-semibold rounded-xl">
                        Fənn imtahanı
                    </Box>
                </div>
            </div>
        </>
    )
}