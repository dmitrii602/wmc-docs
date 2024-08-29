import React from 'react';

const BlockExplorerLinkTestnet = () => {
  const blockExplorerUrl = process.env.BLOCK_EXPLORER_TESTNET;
  return (
    <a href={blockExplorerUrl} target="_blank" rel="noopener noreferrer">
      {blockExplorerUrl}
    </a>
  );
};

export default BlockExplorerLinkTestnet;
