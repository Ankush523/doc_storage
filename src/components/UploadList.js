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

   

    return (
        <div>
        <button onClick={getList}>GetList</button>
        {
            Object.keys(lists).map((list,index)=>(
                <div>
                <label>{lists[index].hash}</label>
                <input onChange={e => setSharebook(e.target.value)} placeholder='Enter Address'/>
                <button >Submit Request</button>
                </div>
            ))
        }
        </div>
    );
}
 
export default UploadList;