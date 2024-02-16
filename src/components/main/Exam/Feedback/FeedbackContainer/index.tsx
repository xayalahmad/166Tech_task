import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import feedback from '../../../../../../public/feedback.svg'
import starBlack from '../../../../../../public/starBlack.svg'
import starGrey from '../../../../../../public/starGrey.svg'

export default function FeedbackContainer() {
    return (
        <>
            <Box className='w-4/5 mb-14 m-auto'>
                <Box className='text-4xl font-bold mb-12 text-center'>
                    Rəylər
                </Box>
                <Box className='py-10 px-6 md:py-14 md:px-10 rounded-xl' sx={{ backgroundColor: '#fafafa', boxShadow: '2px 1px 6px 2px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container spacing={0} className='flex items-center'>
                        <Grid item xs={12} sm={4} md={4} className='flex justify-center !mb-4 md:mb-0'>
                            <Box className='flex flex-col item-center'>
                                <Box className='text-7xl'>4.9</Box>
                                <Box className='text-7xl mt-5 flex justify-center'>
                                    <Box component='img' src={feedback} />
                                    <Box className='ml-3 text-base'>440 rəy</Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} className='m-auto'>
                            <Box className='flex justify-center'>
                                <Box className=''>
                                <Box className='flex items-center mb-1 md:mb-3'>
                                    <Box className='mr-1 md:!mr-2'>
                                        378
                                    </Box>
                                    <Box className='flex'>

                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                    </Box>
                                    <Box className='w-28 md:w-96 h-2 rounded-full ml-1 md:!ml-3' sx={{ backgroundColor: '#d9d9d9' }}>
                                    </Box>
                                </Box>

                                <Box className='flex items-center mb-1 md:mb-3'>
                                    <Box className='mr-1 md:!mr-2'>
                                        24
                                    </Box>
                                    <Box className='flex'>

                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starGrey} />
                                    </Box>
                                    <Box className='w-12 md:w-28 h-2 rounded-full ml-1 md:!ml-3' sx={{ backgroundColor: '#d9d9d9' }}>
                                    </Box>
                                </Box>

                                <Box className='flex items-center mb-1 md:mb-3'>
                                    <Box className='mr-1 md:!mr-2'>
                                        21
                                    </Box>
                                    <Box className='flex'>

                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                    </Box>
                                    <Box className='w-10 md:w-24 h-2 rounded-full ml-1 md:!ml-3' sx={{ backgroundColor: '#d9d9d9' }}>
                                    </Box>
                                </Box>

                                <Box className='flex items-center mb-1 md:mb-3'>
                                    <Box className='mr-1 md:!mr-2'>
                                        15
                                    </Box>
                                    <Box className='flex'>

                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                    </Box>
                                    <Box className='w-8 md:w-16 h-2 rounded-full ml-1 md:!ml-3' sx={{ backgroundColor: '#d9d9d9' }}>
                                    </Box>
                                </Box>

                                <Box className='flex items-center'>
                                    <Box className='mr-1 md:!mr-2'>
                                        2
                                    </Box>
                                    <Box className='flex'>

                                        <Box component='img' src={starBlack} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                        <Box component='img' src={starGrey} />
                                    </Box>
                                    <Box className='w-6 md:w-10 h-2 rounded-full ml-1 md:!ml-3' sx={{ backgroundColor: '#d9d9d9' }}>
                                    </Box>
                                </Box>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}