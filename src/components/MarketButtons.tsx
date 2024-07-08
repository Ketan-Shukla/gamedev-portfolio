import Image from 'next/image';
import React from 'react';

import {StoreButtons} from '../data/data';

interface MarketButtonsProps {
  marketplaces: string[];
}

const MarketButtons: React.FC<MarketButtonsProps> = React.memo(({marketplaces}) => {
  return (
    <div className="market-buttons mt-4">
      {marketplaces.includes('ios') && (
        <a className="mr-2" href="ios-link">
          <Image alt="iOS" className="store-button" height={50} src={StoreButtons.appstore} width={150} />
        </a>
      )}
      {marketplaces.includes('android') && (
        <a className="mr-2" href="android-link">
          <Image alt="Android" className="store-button" height={50} src={StoreButtons.playstore} width={150} />
        </a>
      )}
      {marketplaces.includes('facebook') && (
        <a className="mr-2" href="facebook-link">
          <Image alt="Facebook" className="store-button" height={50} src={StoreButtons.fbplay} width={150} />
        </a>
      )}
    </div>
  );
});

export default MarketButtons;
