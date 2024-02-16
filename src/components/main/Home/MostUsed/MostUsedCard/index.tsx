import Card from "./Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function MostUsedCard() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                    <Card />
                </Grid>
            </Grid>
            <Box className='flex justify-center my-14'>

            <Box className=' text-base font-medium rounded-2xl inline-block mx-auto' style={{padding: '10px 20px', border: '1px solid #D9D9D9'}}>
                Daha çox
            </Box>
            </Box>
        </>
    )
}