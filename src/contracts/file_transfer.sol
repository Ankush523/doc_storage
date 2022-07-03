//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract file{
    uint fileid;
    string hash;
    struct Upload{
        address owner;
        string hash;
        uint fileid;
    }

    struct Share{
        uint fileid;
        address shareaddr;
        address owner;
        string hash;
    }

    mapping(address => mapping(uint => Upload)) give;
    mapping(uint => Share) take;

    function receiveid() external view returns (uint){
        return fileid;
    }

    function accept(string memory _hash) external{
        ++fileid;
        give[msg.sender][fileid] = Upload(msg.sender,_hash,fileid);
    }

    function send(uint _fileid, address _shareaddr) external{
        take[_fileid] = Share(_fileid,_shareaddr,msg.sender,hash);
    }

    function givehash(uint _fileid)public view returns(Upload memory)
    {
        return give[msg.sender][_fileid];
    }
}