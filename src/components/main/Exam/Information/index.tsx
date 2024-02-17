import Grid from '@mui/material/Grid';
import time from '../../../../../public/time.svg'
import calendar from '../../../../../public/Calendar.svg'
import document from '../../../../../public/Documents.svg'
import goldMedal from '../../../../../public/goldMedal.svg'
import ellipse from '../../../../../public/ellipse.svg'
import arrow from '../../../../../public/arrow.svg'
import bronzeMedal from '../../../../../public/bronzeMedal.svg'
import silverMedal from '../../../../../public/silverMedal.svg'
import Box from '@mui/material/Box';
export default function Information() {
    return (
        <Box className=' mt-20 md:mt-40 mb-12 md:mb-24'>
            <Box className='w-4/5 mx-auto'>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={7}>

                        <Box className='rounded-xl p-7  min-h-96' sx={{ backgroundColor: '#fafafa', boxShadow: '2px 1px 6px 2px rgba(0, 0, 0, 0.1)' }}>
                            <Box className=' font-bold text-xl mb-5'>
                                Məlumat
                            </Box>
                            <Box className='block md:flex gap-2 md:gap-5'>
                                <Box className='flex mb-2 md:mb-0'>
                                    <Box component='img' src={time} />
                                    <Box className='ml-1  md:ml-3 whitespace-nowrap text-base font-medium'>
                                        45 dəqiqə
                                    </Box>
                                </Box>
                                <Box className='flex mb-2 md:mb-0'>
                                    <Box component='img' src={document} />
                                    <Box className='ml-1 md:ml-3 whitespace-nowrap text-base font-medium'>
                                        20 sual
                                    </Box>
                                </Box>
                                <Box className='flex'>
                                    <Box component='img' src={calendar} />
                                    <Box className='ml-1 md:ml-3 whitespace-nowrap text-base font-medium'>
                                        22.05.2023 hazırlanıb
                                    </Box>
                                </Box>

                            </Box>
                            <Box className='mt-10'>
                                <Box className=' font-bold text-xl mb-5'>Suallar</Box>
                                <Box className='text-base mb-3' component='li'>
                                    Azərbaycan dili-10 sual
                                </Box>
                                <Box className='text-base' component='li'>
                                    Rizyyaziyyat-10 sual
                                </Box>
                            </Box>

                        </Box>


                    </Grid>
                    <Grid item xs={12} sm={12} md={5} className='flex justify-end'>

                        <Box className='rounded-xl p-7 w-full' sx={{ backgroundColor: '#fafafa', boxShadow: '2px 1px 6px 2px rgba(0, 0, 0, 0.1)' }}>
                            <Box className=' font-bold text-xl mb-5'>
                                İmtahan üzrə nəticələr
                            </Box>

                            <Box className='flex flex-col gap-5'>
                                <Box className='flex justify-between items-center opacity-50'>
                                    <Box className='flex gap-1 md:gap-3 items-center'>
                                        <Box component='img' src={goldMedal} />
                                        <Box className=' whitespace-nowrap text-base font-medium'>
                                            İlahə Nəzərova
                                        </Box>
                                    </Box>

                                    <Box className='flex gap-1 md:gap-2'>
                                        <Box className=' whitespace-nowrap text-sm'>
                                            20 bal
                                        </Box>
                                        <Box component='img' src={ellipse} />
                                        <Box className=' whitespace-nowrap text-sm'>
                                            -12 dəq
                                        </Box>
                                        <Box className='ml-2' component='img' src={arrow} />
                                    </Box>

                                </Box>

                                <Box className='flex justify-between items-center'>
                                    <Box className='flex gap-1 md:gap-3 items-center'>
                                        <Box component='img' src={silverMedal} />
                                        <Box className=' whitespace-nowrap text-base font-medium'>
                                            İlahə Nəzərova
                                        </Box>
                                    </Box>

                                    <Box className='flex gap-1 md:gap-2'>
                                        <Box className=' whitespace-nowrap text-sm'>
                                            20 bal
                                        </Box>
                                        <Box component='img' src={ellipse} />
                                        <Box className=' whitespace-nowrap text-sm'>
                                            00 dəq
                                        </Box>
                                        <Box className='ml-2' component='img' src={arrow} />
                                    </Box>

                                </Box>

                                <Box className='flex justify-between items-center'>
                                    <Box className='flex gap-1 md:gap-3 items-center'>
                                        <Box component='img' src={bronzeMedal} />
                                        <Box className=' whitespace-nowrap text-base font-medium'>
                                            İlahə Nəzərova
                                        </Box>
                                    </Box>

                                    <Box className='flex gap-1 md:gap-2'>
                                        <Box className=' whitespace-nowrap text-sm'>
                                            19 bal
                                        </Box>
                                        <Box component='img' src={ellipse} />
                                        <Box className=' whitespace-nowrap text-sm'>
                                            -12 dəq
                                        </Box>
                                        <Box className='ml-2' component='img' src={arrow} />
                                    </Box>

                                </Box>

                                <Box className='flex justify-between items-center'>
                                    <Box className='flex gap-1 md:gap-3 items-center'>
                                        <Box className=' text-base font-bold w-10 h-10 flex justify-center items-center rounded-full' sx={{ backgroundColor: '#d9d9d9' }}>
                                            4
                                        </Box>
                                        <Box className=' whitespace-nowrap text-base font-medium'>
                                            İlahə Nəzərova
                                        </Box>
                                    </Box>

                                    <Box className='flex gap-1 md:gap-2'>
                                        <Box className=' whitespace-nowrap text-sm'>
                                            18 bal
                                        </Box>
                                        <Box component='img' src={ellipse} />

                                        <Box className=' whitespace-nowrap text-sm'>
                                            -12 dəq
                                        </Box>
                                        <Box className='ml-2' component='img' src={arrow} />
                                    </Box>

                                </Box>

                                <Box className='flex justify-between items-center'>
                                    <Box className='flex gap-1 md:gap-3 items-center'>
                                        <Box className=' text-base font-bold w-10 h-10 flex justify-center items-center rounded-full' sx={{ backgroundColor: '#d9d9d9' }}>
                                            5
                                        </Box>
                                        <Box className=' whitespace-nowrap text-base font-medium'>
                                            İlahə Nəzərova
                                        </Box>
                                    </Box>

                                    <Box className='flex gap-1 md:gap-2'>
                                        <Box className=' whitespace-nowrap text-sm'>
                                            17 bal
                                        </Box>
                                        <Box component='img' src={ellipse} />
                                        <Box className=' whitespace-nowrap text-sm'>
                                            -12 dəq
                                        </Box>
                                        <Box className='ml-2' component='img' src={arrow} />
                                    </Box>

                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}