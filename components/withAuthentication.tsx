import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export function withAuthentication<T>(WrappedComponent: React.ComponentType<T>) {
  
  const WithAuthentication: React.FC<T> = (props: T) => {
    useEffect(() => {
      const checkAuthentication = async () => {
        if (window.ethereum) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts: string[] = await provider.listAccounts();
            const balance = await provider.getBalance(accounts[0]);

            if (accounts.length > 0) {
              console.log('User is already authenticated:', accounts[0]);
              // Additional logic for handling an authenticated user
            } else {
              console.log('User is not authenticated');
              // Additional logic for handling an unauthenticated user
            }
          } catch (error) {
            console.error('Failed to check authentication:', error);
          }
        } else {
          console.error('MetaMask not detected. Please install MetaMask.');
        }
      };

      checkAuthentication();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
}