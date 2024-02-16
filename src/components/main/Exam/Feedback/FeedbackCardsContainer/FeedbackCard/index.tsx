import Box from '@mui/material/Box';
import starBlack from '../../../../../../../public/starBlack.svg'
import starGrey from '../../../../../../../public/starGrey.svg'

export default function FeedbackCard() {
    return (
        <>
            <Box>
                <Box sx={{ backgroundColor: '#fafafa' }} className='p-5'>
                    <Box className=' text-base font-semibold mb-4'>
                        İlaha Nazarova
                    </Box>
                    <Box className='flex'>
                        <Box className='flex'>
                            <Box component='img' src={starBlack} />
                            <Box component='img' src={starBlack} />
                            <Box component='img' src={starBlack} />
                            <Box component='img' src={starBlack} />
                            <Box component='img' src={starGrey} />
                        </Box>
                        <Box className='ml-3 text-sm opacity-60'>
                            2 gün əvvəl
                        </Box>
                    </Box>
                        <Box className='mt-5  text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Box>
                </Box>
            </Box>
        </>
    )
}