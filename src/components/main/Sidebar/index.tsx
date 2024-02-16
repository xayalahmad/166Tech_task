import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '../../shared/Navbar/Dropdown';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='flex-col items-center justify-between mt-8 px-2'>
        <div className="flex flex-col items-center gap-3">
          <div className="mx-2 text-base block text-center w-full">Haqqımızda</div>
          <div className="mx-2 text-base block text-center w-full">Kitablar</div>
          <div className="mx-2 text-base block text-center w-full">İmtahanlar</div>
          <div className="mx-2 text-base block text-center w-full">Bizimlə əlaqə</div>
          <div className='w-full text-center border-b-2 border-t-2 mt-2 mb-4'>
            <Dropdown />
          </div>
        </div>
        <div className='flex flex-col' style={{ marginLeft: '0%' }}>
          <div className='mb-2 bg-white border-black py-2 px-4 rounded-xl border text-center  text-base font-medium duration-300 hover:bg-black hover:text-white '>Daxil ol</div>
          <div className='text-center bg-black text-white py-2 px-4 rounded-xl text-base font-medium border border-black duration-300 hover:bg-white hover:text-black'>Qeydiyyat</div>
        </div>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}  >
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ fill: 'black' }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}