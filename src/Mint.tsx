import React, { useState } from 'react';
import { Box, Button, PageLayout, Heading, Input, Text } from '@primer/react';

const MintNFTPage: React.FC = () => {
  const [nftName, setNFTName] = useState('');
  const [nftDescription, setNFTDescription] = useState('');

  const handleMintNFT = () => {
    // Lógica para criar e mintar o NFT
    alert('Minting NFT...');
  };

  return (
    <PageLayout>
      <Box maxWidth={600} m="auto">
        <Heading as="h1" fontSize={32} mb={4}>
          Mint your NFT
        </Heading>
        <Box mb={3}>
          <Text fontSize={16} fontWeight="bold" mb={2}>
            Name
          </Text>
          <Input
            value={nftName}
            onChange={(e) => setNFTName(e.target.value)}
            placeholder="Enter NFT name"
          />
        </Box>
        <Box mb={3}>
          <Text fontSize={16} fontWeight="bold" mb={2}>
            Description
          </Text>
          <Input.TextArea
            value={nftDescription}
            onChange={(e) => setNFTDescription(e.target.value)}
            placeholder="Enter NFT description"
          />
        </Box>
        <Button onClick={handleMintNFT} variant="primary" sx={{ width: '100%' }}>
          Mint NFT
        </Button>
      </Box>
        <PageLayout.Footer>
          <Text fontSize={12} color="gray.5" textAlign="center">Todos os direitos reservados.</Text>
  </PageLayout.Footer>
    </PageLayout>
  );
};

export default MintNFTPage;