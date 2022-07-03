import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row  w-[100vw] h-[fit-content] p-[20px] shadow-xl justify-between '>
        <label className='font-bold  text-purple-700 p-3 text-2xl rounded-full '>
            UploadSys
        </label>
        <ConnectButton/>
    </div>
     );
}
 
export default Navbar;