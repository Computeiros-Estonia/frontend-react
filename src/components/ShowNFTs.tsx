import React, { useEffect, useState } from 'react';
//import { MyERC721Contract } from '../../contracts';
import {NavList} from '@primer/react'
import { ethers } from 'ethers';

type NFT = {
  tokenId: number;
  name: string;
  description: string;
  imageURI: string;
  attributes: Attribute[];
  owner: string;
};

type Attribute = {
  trait_type: string;
  value: string;
};

const NFTList: React.FC = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch('/contracts/exemple.json');
        const data = await response.json();

        setNFTs(data);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
      }
      /*
      // Crie uma instância do contrato ERC-721 aqui
      const contract = new MyERC721Contract(); 
      // Obtenha o número total de NFTs
      const totalSupply = await contract.totalSupply();

      const tokens = [];
      for (let i = 0; i < totalSupply; i++) {
        const tokenId = await contract.tokenByIndex(i);
        const tokenURI = await contract.tokenURI(tokenId);
        tokens.push(tokenURI);
      }

      setNFTs(tokens);
      */
    };

    fetchNFTs();
  }, []);

  return (
    <div>
      <h1>List of NFTs</h1>
      {nfts.map((nft) => (
        <div key={nft.tokenId}>
          <h2>{nft.name}</h2>
          <p>{nft.description}</p>
          <img src={nft.imageURI} alt={nft.name} />
          <p>Owner: {nft.owner}</p>
          <ul>
            {nft.attributes.map((attribute: Attribute, index: number) => (
              <li key={index}>
                {attribute.trait_type}: {attribute.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NFTList;