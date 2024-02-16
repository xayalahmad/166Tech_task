import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FeedbackCard from "./FeedbackCard";

export default function FeedbackCardsContainer() {
    return (
        <Box className='w-4/5 m-auto'>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='flex justify-end'>
                    <FeedbackCard />
                </Grid>
            </Grid>
            <Box className='flex justify-center my-14'>
                <Box className=' text-base font-medium rounded-2xl inline-block mx-auto' style={{ padding: '10px 20px', border: '1px solid #D9D9D9' }}>
                    Daha çox
                </Box>
            </Box>
        </Box>
    )
}