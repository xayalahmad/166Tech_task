import Box from '@mui/material/Box';
import Dropdown from './Dropdown';
import call from '../../../../public/call.svg'
import message from '../../../../public/message.svg'
import instagram from '../../../../public/instagram.svg'
import facebook from '../../../../public/facebook.svg'
import telegram from '../../../../public/telegram.svg'
import whatsapp from '../../../../public/whatsapp.svg'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#fafafa' }} >
            <Box className='w-4/5 m-auto'>
                <Box className='flex justify-center'>
                    <Box className='block md:flex justify-between items-center pt-10 w-full'>
                    <Link to={'/'}>
                        <Box className=' text-4xl font-bold mr-8 mb-7'>
                            Logo
                        </Box>
                    </Link>
                        <Box className='flex justify-between gap-7 overflow-scroll'>
                        <Link to={'/exam'} className='flex items-center'>
                            <Box className='flex items-center text-lg font-medium'>
                                Haqqımızda
                            </Box>
                        </Link>
                        <Link to={'/exam'} className='flex items-center'>
                            <Box className='flex items-center text-lg font-medium'>
                                Kitablar
                            </Box>
                        </Link>
                        <Link to={'/exam'} className='flex items-center'>
                            <Box className='flex items-center text-lg font-medium'>
                                İmtahanlar
                            </Box>
                        </Link>
                        <Link to={'/exam'} className='flex items-center'>
                            <Box className='flex items-center text-lg font-medium whitespace-nowrap'>
                                Bizimlə əlaqə
                            </Box>
                        </Link>
                            <Dropdown />
                        </Box>
                    </Box>

                </Box>
                <Box className='mt-10'>
                    <Box className='flex items-center mb-6'>
                        <Box className='w-9 h-9 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                            <Box component='img' src={message} />
                        </Box>
                        <Box className='text-base ml-3'>Nümunə@gmail.com</Box>
                    </Box>
                    <Box className='flex items-center'>
                        <Box className='w-9 h-9 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                            <Box component='img' src={call} />
                        </Box>
                        <Box className='text-base ml-3'>Nümunə@gmail.com</Box>
                    </Box>
                </Box>
                <Box sx={{ borderBottom: '1px solid #d9d9d9' }} className='mt-6 pb-5 flex justify-end gap-5'>
                    <Box className='w-10 h-10 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                        <Box component='img' src={instagram} />
                    </Box>
                    <Box className='w-10 h-10 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                        <Box component='img' src={facebook} />
                    </Box>
                    <Box className='w-10 h-10 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                        <Box component='img' src={whatsapp} />
                    </Box>
                    <Box className='w-10 h-10 rounded-full flex items-center justify-center' sx={{ backgroundColor: '#e9e9e9' }}>
                        <Box component='img' src={telegram} />
                    </Box>
                </Box>
                <Box className=' text-sm my-5'>
                    © 2024, şirkərin adı. Bütün hüquqlar qorunur
                </Box>
            </Box>
        </Box>
    )
}