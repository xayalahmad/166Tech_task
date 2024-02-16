import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MostUsedSidebar from './MostUsedSidebar';
import MostUsedCard from './MostUsedCard';
// import Item from '@mui/material/Item';
export default function MostUsed() {
    return (
        <Box className='w-4/5 m-auto'>
            <div>
            <div className='mt-16'>
                <div className="flex flex-col items-center mb-16">
                    <div className="text-base mb-3 md:mb-5">Ən çox işlənənlər</div>
                    <div className='text-3xl md:text-4xl font-bold'>
                        İmtahanlar
                    </div>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item  xs={12}  sm={12} md={4}>
                    <MostUsedSidebar />
                </Grid>
                <Grid item sm={12} md={8}>
                    <MostUsedCard/>
                </Grid>

            </Grid>
            </div>
        </Box>

    )
}