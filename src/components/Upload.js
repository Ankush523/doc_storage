import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const Upload = () => {
    const contract = GetContract();
    const[upbook,setUpbook] = useState('');
    const addbook = async() => {
    await contract.accept(upbook);
    }
    return (
        <div>
            <br/>
            <br/>
            <label className='text-[white] text-[20px]'>File name : </label>
            <input className='rounded-md w-[300px] h-[40px]' onChange={e => setUpbook(e.target.value)}/>
            <br/>
            <br/>
            <button className='text-white text-[20px] pl-20' onClick={addbook}>Enter</button>
        </div>
    );
}
 
export default Upload;