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
            <input onChange={e => setUpbook(e.target.value)}/>
            <button onClick={addbook}>Enter</button>
        </div>
    );
}
 
export default Upload;