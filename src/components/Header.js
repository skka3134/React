import React from 'react'

import { Link } from "react-router-dom";


import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";





function Header() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  
  return (
    
    <header>
      <Link to="/" className="link">
      <div className="headerItem">Home</div>
      </Link>
      <Link to="/NftGallery" className="link">
      <div className="headerItem">NftGallery</div>
      </Link>
      <Link to="/Swap" className="link">
      <div className="headerItem">Swap</div>
      </Link>
      <Link to="/stake" className="link">
      <div className="headerItem">stake</div>
      </Link>

      {isConnected ? (
      <>
      <h2 className="connectButton">Connected Wallet</h2>
      </>
      ) : (
      <button className="connectButton" onClick={connect} >Connect Your Wallet</button>
      )}

    </header>
  )
}

export default Header