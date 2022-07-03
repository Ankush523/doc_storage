import React from 'react';
import { useContract } from 'wagmi';
import FileABI from '../contracts/ABIs/FileABI.json'
import { useSigner } from 'wagmi';
const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x520992B6Ef731Bf0aF421A06a9e8256CA104f2F7',
        contractInterface: FileABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;