import { parse } from '@ethersproject/transactions';
import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
const UploadList = () => {
    const contract = GetContract();
    const[lists,setList] = useState([]);

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
                <p>{lists[index].hash}</p>
            ))
        }
        </div>
    );
}
 
export default UploadList;