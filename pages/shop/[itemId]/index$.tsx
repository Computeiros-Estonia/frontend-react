/**
 * @title user - dynamic route page
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Box, Button, PageLayout, Input, Text } from '@primer/react';

const IndexPage: React.FC = () => {
  interface NFT {
  tokenId: number;
  name: string;
  description: string;
  imageURI: string;
  attributes: Attribute[];
  owner: string;
}

interface Attribute {
  trait_type: string;
  value: string;
}
  const { itemId } = useParams<{ itemId: string }>()
    const [nft, setNFT] = useState<NFT | null>(null);

    useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch('/contracts/exemple.json');
        const data = await response.json();
        const filtered = data.find((nft) => nft.tokenId === itemId);
        setNFT(filtered || null);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);


  const handleMintNFT = () => {
    // Lógica para criar e mintar o NFT
    alert('Minting NFT...');
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Text as="h1" fontSize={32} mb={4}>
          Você deseja realmente adicionar {nft?.name} à sua carteira?
        </Text>
        <Button onClick={handleMintNFT} variant="primary" sx={{ width: '100%' }}>
          Mintar NFT
        </Button>
        </PageLayout.Content>
        <PageLayout.Footer>
          <Text fontSize={12} color="gray.5" textAlign="center">Todos os direitos reservados.</Text>
  </PageLayout.Footer>
    </PageLayout>
  );
};

export default IndexPage;