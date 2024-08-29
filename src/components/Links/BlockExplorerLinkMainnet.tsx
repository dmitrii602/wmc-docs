import React from 'react';

const BlockExplorerLinkMainnet = () => {
  const blockExplorerUrl = process.env.BLOCK_EXPLORER_MAINNET;
  return (
    <a href={blockExplorerUrl} target="_blank" rel="noopener noreferrer">
      {blockExplorerUrl}
    </a>
  );
};

export default BlockExplorerLinkMainnet;
