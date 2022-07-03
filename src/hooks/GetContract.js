import React from 'react';
import { useContract } from 'wagmi';
import FileABI from '../contracts/ABIs/FileABI.json'
import { useSigner } from 'wagmi';
const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xb8b96F52BC854206d6538B2Ff1E6a6493FeEa292',
        contractInterface: FileABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;