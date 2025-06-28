import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: 'YOUR_ALCHEMY_API_KEY', // ← Replace with your Alchemy API key
  network: Network.MATIC_MAINNET, // Polygon Mainnet (MATIC)
};

const alchemy = new Alchemy(settings);

export const useNFTs = () => {
  const getNFTsForAddress = async (address) => {
    if (!address) return [];
    try {
      const response = await alchemy.nft.getNftsForOwner(address);
      return response.ownedNfts || [];
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  };

  return { getNFTsForAddress };
};
