import { parse } from '@ethersproject/transactions';
import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
const UploadList = () => {
    const contract = GetContract();

    const[lists,setList] = useState([]);
    const[sharebook,setSharebook] = useState('');


    const getList =async() =>{
        var len = await contract.receiveid();
        var parseList = len.toString();
        setList([]);
        for(let i=1;i<=parseList;i++)
        {
            var list = await contract.givehash(i);
            setList((lists) => [...lists,list])
        }
    }

    const complete=async(key)=>{
        await contract.send(key,sharebook)
    }

    const[getbook,setGetbook] = useState('');
    const getting = async() => {
    await contract.send(getbook);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <br/>
            <br/>
        <button className='font-mono rounded-md w-[fit-content] px-2 text-[20px] bg-slate-100 hover:shadow-lg' onClick={getList}>GetList</button>
        <br/>
            <div className='w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[30px]'>
                <label className='text-[20px] font-mono text-white bg-black w-[fit-content] py-2 px-4 rounded-xl'>Your Files List</label>
                <br/>
                <br/>
            <div className='flex flex-col-reverse w-[100%] h-[fit-content]' >
        {
            Object.keys(lists).map((list,index)=>(
                <div>
                    <div className='flex flex-row w-[100%] justify-around border-2 rounded-md p-2 '>
                    <label>{lists[index].hash}</label>
                </div>
                <div className='flex flex-row justify-around pl-20'>
                <input className='rounded-md w-[200px] h-[40px]' onChange={e => setSharebook(e.target.value)} placeholder='Enter Address'/>
                <button onClick={()=>complete(index)}>Submit Request</button>
                <br/>
                </div>
                </div>
            ))
        }
        </div>
        </div>
        </div>
    );
}
 
export default UploadList;