import React, { useEffect } from 'react';
import { useState } from 'react';
import NFTList  from '../components/NFTList';
import { PageLayout } from '@primer/react';

function App() {

  const { ethereum } = window as any;


  return (
    <div className="App">
      <header className="App-header">
        <h1>Marketplace de Sapatos</h1>
        <div>
          {account ? (
            <p>Conectado com a conta: {account}</p>
          ) : (
            <button onClick={connectWallet}>Conectar Wallet</button>
          )}
        </div>
      </header>
      <main className="App-main">
        <h2>Criar Sapato</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          addShoe();
        }}>
          <label htmlFor="shoeName">Nome do Sapato:</label>
          <input type="text" id="shoeName" value={shoeName} onChange={(event) => setShoeName(event.target.value)} required />
          <label htmlFor="shoePrice">Preço do Sapato:</label>
          <input type="number" id="shoePrice" value={shoePrice} onChange={(event) => setShoePrice(parseInt(event.target.value))} required />
          <button type="submit">Adicionar Sapato</button>
        </form>
        <h2>Comprar Sapatos</h2>
        <div className="shoes-container">
          {shoes.map(shoe => (
            <div className="shoe" key={shoe.id}>
              <h3>{shoe.name}</h3>
              <p>Preço: {ethers.utils.formatEther(shoe.price)} ETH</p>
              {selectedShoe && selectedShoe.id === shoe.id ? (
                <button onClick={() => setSelectedShoe(null)}>Cancelar</button>
              ) : (
                <button onClick={() => setSelectedShoe(shoe)}>Comprar</button>
              )}
            </div>
          ))}
        </div>
        {selectedShoe && (
          <div className="selected-shoe">
            <h2>Confirmar Compra</h2>
            <p>Você tem certeza que quer comprar {selectedShoe.name} por {ethers.utils.formatEther(selectedShoe.price)} ETH?</p>
            <button onClick={buyShoe}>Sim, Comprar</button>
            <button onClick={() => setSelectedShoe(null)}>Cancelar</button>
          </div>
        )}
        {message && <p>{message}</p>}
      </main>
    </div>
  );
}

export default App;