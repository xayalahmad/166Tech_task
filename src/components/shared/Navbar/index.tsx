import Box from '@mui/material/Box';
import Dropdown from "./Dropdown"
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="flex justify-center py-3 bg-white">
            <Box className=" w-4/5 m-auto flex  items-center justify-between">
            <Link to={'/'}>
                <div className="text-4xl font-bold">
                    Logo
                </div>
            </Link>
                <Sidebar />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <div className='flex items-center justify-between'>
                        <div className=" flex items-center">
                            <Link to={'/exam'}>
                                <div className="mx-2 w-min text-base">Haqqımızda</div>
                            </Link>
                            <Link to={'/exam'}>
                                <div className="mx-2 w-min text-base">Kitablar</div>
                            </Link>
                            <Link to={'/exam'}>
                                <div className="mx-2 w-min text-base">İmtahanlar</div>
                            </Link>
                            <Link to={'/exam'}>
                                <div className="mx-2 w-min text-base whitespace-nowrap">Bizimlə əlaqə</div>
                            </Link>
                            <Dropdown />
                        </div>
                        <div className='flex' >
                            <Box className='whitespace-nowrap bg-white border border-black py-2 px-4 rounded-xl  text-center mr-3 text-base font-medium duration-300 hover:bg-black hover:text-white ' sx={{border: '1px solid black'}}>Daxil ol</Box>
                            <Box className='bg-black text-white py-2 px-4 rounded-xl text-base font-medium border border-black duration-300 hover:bg-white hover:text-black ' sx={{ border: '1px solid black'}}>Qeydiyyat</Box>
                        </div>
                    </div>
                </Box>

            </Box>

        </div>
    )
}