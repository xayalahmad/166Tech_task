import Box from '@mui/material/Box';
import Dropdown from "./Dropdown"
import Sidebar from '../../main/Sidebar';
export default function Navbar() {
    return (
        <div className="flex justify-center py-3 bg-white">
            <Box  className=" w-4/5 m-auto flex  items-center justify-between">
                <div className="text-4xl font-bold">
                    Logo
                </div>
                    <Sidebar/>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <div className='flex items-center justify-between'>
                        <div className=" flex items-center">
                            <div className="mx-2 w-min text-base">Haqqımızda</div>
                            <div className="mx-2 w-min text-base">Kitablar</div>
                            <div className="mx-2 w-min text-base">İmtahanlar</div>
                            <div className="mx-2 w-min text-base whitespace-nowrap">Bizimlə əlaqə</div>
                            <Dropdown />
                        </div>
                        <div className='flex' >
                            <div className='whitespace-nowrap bg-white border-black py-2 px-4 rounded-xl border text-center mr-3 text-base font-medium duration-300 hover:bg-black hover:text-white '>Daxil ol</div>
                            <div className='bg-black text-white py-2 px-4 rounded-xl text-base font-medium border border-black duration-300 hover:bg-white hover:text-black'>Qeydiyyat</div>
                        </div>
                    </div>
                </Box>

            </Box>

        </div>
    )
}